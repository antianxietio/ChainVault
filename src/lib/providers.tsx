'use client'

import '@rainbow-me/rainbowkit/styles.css'
import { ReactNode } from 'react'
import { RainbowKitProvider, getDefaultConfig } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { mainnet, sepolia } from 'wagmi/chains'
import { defineChain } from 'viem'

// 👇 Define local Hardhat chain
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

const config = getDefaultConfig({
  appName: 'ChainVault',
  projectId: 'c02928ae2e52276f6fce060b0deeaee8', // Replace with your WalletConnect ID
  chains: [localhost, sepolia, mainnet], // 👈 Add localhost here
})

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
