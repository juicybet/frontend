import { useState, useEffect, useRef } from "react"
import { BigNumber, constants } from "ethers"
import { useWeb3React } from "@web3-react/core"
import { useRefresh } from "./refresh"
import { getErc20Contract } from "../utils/contracts"
import useLastUpdated from "./lastUpdated"
import { simpleRpcProvider } from "../utils/providers"
import { Web3Provider } from "@ethersproject/providers"
import { Web3ReactContextInterface } from "@web3-react/core/dist/types"

type UseTokenBalanceState = {
  balance: BigNumber
  fetchStatus: FetchStatus
}

export enum FetchStatus {
  NotFetched = "not-fetched",
  Success = "success",
  Failed = "failed",
}

const useTokenBalance = (tokenAddress: string) => {
  const { NotFetched, Success, Failed } = FetchStatus
  const [balanceState, setBalanceState] = useState<UseTokenBalanceState>({
    balance: constants.Zero,
    fetchStatus: NotFetched,
  })
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const contract = getErc20Contract(tokenAddress)
      try {
        const res = await contract.balanceOf(account)
        setBalanceState({ balance: BigNumber.from(res.toString()), fetchStatus: Success })
      } catch (e) {
        console.error(e)
        setBalanceState((prev) => ({
          ...prev,
          fetchStatus: Failed,
        }))
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, tokenAddress, fastRefresh, Success, Failed])

  return balanceState
}

export const useGetEtherBalance = () => {
  const [fetchStatus, setFetchStatus] = useState(FetchStatus.NotFetched)
  const [balance, setBalance] = useState(constants.Zero)
  const { account } = useWeb3React()
  const { lastUpdated, setLastUpdated } = useLastUpdated()

  useEffect(() => {
    const fetchBalance = async () => {
      try {
        const walletBalance = await simpleRpcProvider.getBalance(account!)
        setBalance(BigNumber.from(walletBalance.toString()))
        setFetchStatus(FetchStatus.Success)
      } catch {
        setFetchStatus(FetchStatus.Failed)
      }
    }

    if (account) {
      fetchBalance()
    }
  }, [account, lastUpdated, setBalance, setFetchStatus])

  return { balance, fetchStatus, refresh: setLastUpdated }
}

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
export const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, ...web3React } = useWeb3React()
  const refEth = useRef(library)
  const [provider, setprovider] = useState(library || simpleRpcProvider)

  useEffect(() => {
    if (library !== refEth.current) {
      setprovider(library || simpleRpcProvider)
      refEth.current = library
    }
  }, [library])

  return { library: provider, chainId: chainId ?? parseInt(process.env.CHAIN_ID || "", 10), ...web3React }
}
