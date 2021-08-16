import { bsc, bscTestnet } from "./chains"

export const bnb = {
  symbol: "BNB",
  projectLink: "https://www.binance.com/",
}

export const cake = {
  symbol: "CAKE",
  address: {
    [bsc.chainId]: "0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82",
    [bscTestnet.chainId]: "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe",
  },
  decimals: 18,
  projectLink: "https://pancakeswap.finance/",
}

export const wbnb = {
  symbol: "wBNB",
  address: {
    [bsc.chainId]: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
    [bscTestnet.chainId]: "0xae13d989dac2f0debff460ac112a837c89baa7cd",
  },
  decimals: 18,
  projectLink: "https://www.binance.com/",
}

export const usdt = {
  symbol: "USDT",
  address: {
    [bsc.chainId]: "0x55d398326f99059fF775485246999027B31[bscTestnet.chainId]955",
    [bscTestnet.chainId]: "0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5",
  },
  decimals: 18,
  projectLink: "https://tether.to/",
}

export const busd = {
  symbol: "BUSD",
  address: {
    [bsc.chainId]: "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
    [bscTestnet.chainId]: "0xeD24FC36d5Ee211Ea25A80239Fb8C4Cfd80f12Ee",
  },
  decimals: 18,
  projectLink: "https://www.binance.com",
}
