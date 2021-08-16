import { Signer } from "@ethersproject/abstract-signer"
import { Contract } from "@ethersproject/contracts"
import { getAddress } from "@ethersproject/address"
import { JsonRpcSigner, Web3Provider, Provider } from "@ethersproject/providers"
import { AddressZero } from "@ethersproject/constants"
import { simpleRpcProvider } from "./providers"
import erc20Abi from "../config/abis/erc20.json"

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value: any): string | false {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

// account is not optional
export function getSigner(library: Web3Provider, account: string): JsonRpcSigner {
  return library.getSigner(account).connectUnchecked()
}

// account is optional
export function getProviderOrSigner(library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner {
  return account ? getSigner(library, account) : library
}

export const getErc20Contract = (address: string, signer?: Signer | Provider) => {
  return new Contract(address, erc20Abi, signer ?? simpleRpcProvider)
}

export function getContract(address: string, abi: any, library: Web3Provider, account?: string): Contract {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, abi, getProviderOrSigner(library, account) as any)
}
