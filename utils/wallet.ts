import { bsc, bscTestnet } from "../config/constants/chains"

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async () => {
  const provider = (window as any).ethereum
  if (provider) {
    const chainId = parseInt(process.env.CHAIN_ID!, 10)
    try {
      await provider.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId: `0x${chainId.toString(16)}`,
            chainName: "Binance Smart Chain Mainnet",
            nativeCurrency: {
              name: "BNB",
              symbol: "bnb",
              decimals: 18,
            },
            rpcUrls: bsc.rpc,
            blockExplorerUrls: [`${bsc.explorers[0].url}/`],
          },
        ],
      })
      return true
    } catch (error) {
      console.error("Failed to setup the network in Metamask:", error)
      return false
    }
  } else {
    console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
    return false
  }
}
