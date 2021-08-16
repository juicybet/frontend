// Source: https://github.com/ethereum-lists/chains

export const ethereum = {
  name: "Ethereum Mainnet",
  chain: "ETH",
  network: "mainnet",
  icon: "ethereum",
  rpc: [
    "https://mainnet.infura.io/v3/${INFURA_API_KEY}",
    "wss://mainnet.infura.io/ws/v3/${INFURA_API_KEY}",
    "https://api.mycryptoapi.com/eth",
    "https://cloudflare-eth.com",
  ],
  faucets: [],
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  infoURL: "https://ethereum.org",
  shortName: "eth",
  chainId: 1,
  networkId: 1,
  slip44: 60,
  ens: {
    registry: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
  },
  explorers: [
    {
      name: "etherscan",
      url: "https://etherscan.io",
      standard: "EIP3091",
    },
  ],
}

export const bsc = {
  name: "Binance Smart Chain Mainnet",
  chain: "BSC",
  network: "mainnet",
  rpc: [
    "https://bsc-dataseed1.binance.org",
    "https://bsc-dataseed2.binance.org",
    "https://bsc-dataseed3.binance.org",
    "https://bsc-dataseed4.binance.org",
    "https://bsc-dataseed1.defibit.io",
    "https://bsc-dataseed2.defibit.io",
    "https://bsc-dataseed3.defibit.io",
    "https://bsc-dataseed4.defibit.io",
    "https://bsc-dataseed1.ninicoin.io",
    "https://bsc-dataseed2.ninicoin.io",
    "https://bsc-dataseed3.ninicoin.io",
    "https://bsc-dataseed4.ninicoin.io",
    "wss://bsc-ws-node.nariox.org",
  ],
  faucets: [],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "BNB",
    decimals: 18,
  },
  infoURL: "https://www.binance.org",
  shortName: "bnb",
  chainId: 56,
  networkId: 56,
  explorers: [
    {
      name: "bscscan",
      url: "https://bscscan.com",
      standard: "EIP3091",
    },
  ],
}

export const bscTestnet = {
  name: "Binance Smart Chain Testnet",
  chain: "BSC",
  network: "Chapel",
  rpc: [
    "https://data-seed-prebsc-1-s1.binance.org:8545",
    "https://data-seed-prebsc-2-s1.binance.org:8545",
    "https://data-seed-prebsc-1-s2.binance.org:8545",
    "https://data-seed-prebsc-2-s2.binance.org:8545",
    "https://data-seed-prebsc-1-s3.binance.org:8545",
    "https://data-seed-prebsc-2-s3.binance.org:8545",
  ],
  faucets: ["https://testnet.binance.org/faucet-smart"],
  nativeCurrency: {
    name: "Binance Chain Native Token",
    symbol: "tBNB",
    decimals: 18,
  },
  infoURL: "https://testnet.binance.org/",
  shortName: "bnbt",
  chainId: 97,
  networkId: 97,
  explorers: [
    {
      name: "bscscan-testnet",
      url: "https://testnet.bscscan.com",
      standard: "EIP3091",
    },
  ],
}

export const polygon = {
  name: "Matic(Polygon) Mainnet",
  chain: "Matic(Polygon)",
  network: "mainnet",
  rpc: [
    "https://rpc-mainnet.matic.network",
    "wss://ws-mainnet.matic.network",
    "https://rpc-mainnet.matic.quiknode.pro",
    "https://matic-mainnet.chainstacklabs.com",
  ],
  faucets: [],
  nativeCurrency: {
    name: "Matic",
    symbol: "MATIC",
    decimals: 18,
  },
  infoURL: "https://matic.network/",
  shortName: "matic",
  chainId: 137,
  networkId: 137,
  explorers: [
    {
      name: "polygonscan",
      url: "https://polygonscan.com",
      standard: "EIP3091",
    },
  ],
}

export const fantom = {
  name: "Fantom Opera",
  chain: "FTM",
  network: "mainnet",
  rpc: ["https://rpcapi.fantom.network"],
  faucets: [],
  nativeCurrency: {
    name: "Fantom",
    symbol: "FTM",
    decimals: 18,
  },
  infoURL: "https://fantom.foundation",
  shortName: "ftm",
  chainId: 250,
  networkId: 250,
  icon: "fantom",
  explorers: [
    {
      name: "ftmscan",
      url: "https://ftmscan.com",
      icon: "ftmscan",
      standard: "EIP3091",
    },
  ],
}

export const avalanche = {
  name: "Avalanche Mainnet",
  chain: "AVAX",
  network: "mainnet",
  rpc: ["https://api.avax.network/ext/bc/C/rpc"],
  faucets: [],
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  infoURL: "https://cchain.explorer.avax.network/",
  shortName: "Avalanche",
  chainId: 43114,
  networkId: 1,
}

export const avalancheTestnet = {
  name: "Avalanche Fuji Testnet",
  chain: "AVAX",
  network: "testnet",
  rpc: ["https://api.avax-test.network/ext/bc/C/rpc"],
  faucets: ["https://faucet.avax-test.network/"],
  nativeCurrency: {
    name: "Avalanche",
    symbol: "AVAX",
    decimals: 18,
  },
  infoURL: "https://cchain.explorer.avax-test.network",
  shortName: "Fuji",
  chainId: 43113,
  networkId: 1,
}
