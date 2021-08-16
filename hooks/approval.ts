import { MaxUint256 } from "@ethersproject/constants"
import { Trade, TokenAmount, CurrencyAmount, ETHER } from "@pancakeswap/sdk"
import { useCallback, useMemo } from "react"
import { useActiveWeb3React } from "./wallet"
import { useTokenAllowance } from "./allowance"
import { calculateGasMargin } from "../utils"
import { useTokenContract } from "./contract"

export enum ApprovalState {
  Unknown,
  NotApproved,
  Pending,
  Approved,
}

// returns a variable indicating the state of the approval and a function which approves if necessary or early returns
export function useApproveCallback(
  amountToApprove?: CurrencyAmount,
  spender?: string
): [ApprovalState, () => Promise<void>] {
  const { account } = useActiveWeb3React()
  const token = amountToApprove instanceof TokenAmount ? amountToApprove.token : undefined
  const currentAllowance = useTokenAllowance(token, account ?? undefined, spender)

  // check the current approval status
  const approvalState: ApprovalState = useMemo(() => {
    if (!amountToApprove || !spender) return ApprovalState.Unknown
    if (amountToApprove.currency === ETHER) return ApprovalState.Approved
    // we might not have enough data to know whether or not we need to approve
    if (!currentAllowance) return ApprovalState.Unknown

    // amountToApprove will be defined if currentAllowance is
    return currentAllowance.lessThan(amountToApprove) ? ApprovalState.NotApproved : ApprovalState.Approved
  }, [amountToApprove, currentAllowance, spender])

  const tokenContract = useTokenContract(token?.address)

  const approve = useCallback(async (): Promise<void> => {
    if (approvalState !== ApprovalState.NotApproved) {
      console.error("approve was called unnecessarily")
      return
    }
    if (!token) {
      console.error("no token")
      return
    }

    if (!tokenContract) {
      console.error("tokenContract is null")
      return
    }

    if (!amountToApprove) {
      console.error("missing amount to approve")
      return
    }

    if (!spender) {
      console.error("no spender")
      return
    }

    let useExact = false
    const estimatedGas = await tokenContract.estimateGas.approve(spender, MaxUint256).catch(() => {
      // general fallback for tokens who restrict approval amounts
      useExact = true
      return tokenContract.estimateGas.approve(spender, amountToApprove.raw.toString())
    })

    // eslint-disable-next-line consistent-return
    return tokenContract
      .approve(spender, useExact ? amountToApprove.raw.toString() : MaxUint256, {
        gasLimit: calculateGasMargin(estimatedGas),
      })
      .catch((error: Error) => {
        console.error("Failed to approve token", error)
        throw error
      })
  }, [approvalState, token, tokenContract, amountToApprove, spender])

  return [approvalState, approve]
}
