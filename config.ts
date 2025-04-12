import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { defineChain } from 'viem'

// Define Hardhat local chain
const localhost = defineChain({
  id: 31337,
  name: 'Hardhat',
  network: 'localhost',
  nativeCurrency: {
    name: 'Ether',
    symbol: 'ETH',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ['http://127.0.0.1:8545'],
    },
  },
})

export const config = createConfig({
  chains: [localhost, mainnet, sepolia], // 👈 Localhost first for dev
  transports: {
    [localhost.id]: http(),
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})
