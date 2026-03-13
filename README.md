# ChainVault

**ChainVault** is a decentralized NFT lending and collateral platform built on Ethereum. It enables users to lock NFTs as collateral, borrow against their holdings, and earn dynamic interest — all in a fully trustless, smart-contract-powered environment.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running Locally](#running-locally)
- [Smart Contracts](#smart-contracts)
  - [Compiling Contracts](#compiling-contracts)
  - [Running a Local Node](#running-a-local-node)
  - [Deploying Contracts](#deploying-contracts)
  - [Running Contract Tests](#running-contract-tests)
- [API Reference](#api-reference)
- [Supported Networks](#supported-networks)
- [Contributing](#contributing)

---

## Features

- **Trustless Lending** — Smart contracts eliminate intermediaries; loans are governed entirely on-chain.
- **NFT Collateral** — Lock NFTs as collateral and access liquidity without selling your assets.
- **Real-Time NFT Pricing** — Oracle-based valuation ensures fair, up-to-date collateral assessment.
- **Automated Liquidation** — Defaulted positions are handled automatically by the contract.
- **Multi-Chain Support** — Designed for Ethereum Mainnet, Sepolia testnet, and local Hardhat networks.
- **Wallet Authentication** — EIP-191 message signing for secure, passwordless sign-in.
- **Fractional Ownership** — Enables partial NFT lending for improved liquidity.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | Next.js 15 (App Router) + React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Blockchain Hooks | Wagmi 2 + Viem |
| Wallet UI | RainbowKit 2 |
| Ethereum Library | Ethers.js 6 |
| Smart Contracts | Solidity 0.8.28 |
| Contract Dev Tools | Hardhat 2 + Hardhat Ignition |
| Data Fetching | TanStack React Query 5 |

---

## Project Structure

```
ChainVault/
├── contracts/                  # Solidity smart contracts
│   ├── Lock.sol                # Time-locked ETH vault contract
│   └── LockABI.ts              # ABI TypeScript export for frontend use
├── ignition/
│   └── modules/
│       └── Lock.js             # Hardhat Ignition deployment module
├── scripts/
│   └── deploy.ts               # Manual deployment script (ethers.js)
├── test/
│   └── Lock.js                 # Chai tests for the Lock contract
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with Wagmi/RainbowKit providers
│   │   ├── page.tsx            # Home page entry point
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── AuthButton.tsx      # Sign-in via wallet signature
│   │   ├── Hero.tsx            # Landing page hero section
│   │   ├── LockInterface.tsx   # Lock/withdraw contract UI
│   │   ├── Navbar.tsx          # Responsive navigation bar
│   │   ├── WalletButton.tsx    # RainbowKit connect button wrapper
│   │   └── footer.tsx          # Footer with links
│   ├── hooks/
│   │   └── useLockContract.ts  # Hook for Lock contract interactions
│   ├── lib/
│   │   ├── lock.ts             # Contract address & ABI
│   │   └── providers.tsx       # Wagmi/RainbowKit provider setup
│   └── pages/
│       ├── api/
│       │   └── verify.ts       # EIP-191 signature verification endpoint
│       └── homepage.tsx        # Main landing page component
├── config.ts                   # Wagmi chain configuration
├── hardhat.config.ts           # Hardhat configuration
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript compiler options
└── package.json                # Dependencies & npm scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** or **yarn**
- A browser wallet (e.g., [MetaMask](https://metamask.io/))
- A [WalletConnect Cloud](https://cloud.walletconnect.com/) project ID

### Installation

```bash
git clone https://github.com/antianxietio/ChainVault.git
cd ChainVault
npm install
```

### Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
# WalletConnect project ID (required for wallet connections)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here

# RPC URLs (optional — use your own Alchemy/Infura endpoints for production)
NEXT_PUBLIC_MAINNET_RPC_URL=https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_KEY

# Private key for contract deployment (never commit this)
PRIVATE_KEY=your_deployer_wallet_private_key
```

> ⚠️ **Never commit `.env.local` or any file containing private keys.** It is already listed in `.gitignore`.

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To build and run the production server:

```bash
npm run build
npm start
```

---

## Smart Contracts

The core contract is `Lock.sol` — a time-locked ETH vault that stores ETH until a specified unlock timestamp, then allows the owner to withdraw.

### Compiling Contracts

```bash
npx hardhat compile
```

Compiled artifacts are placed in the `artifacts/` directory (excluded from git).

### Running a Local Node

Start a local Hardhat Ethereum node for development and testing:

```bash
npx hardhat node
```

This starts a local RPC server at `http://127.0.0.1:8545` with chain ID `31337` and pre-funded test accounts.

### Deploying Contracts

**Using the deploy script:**

```bash
npx hardhat run scripts/deploy.ts --network localhost
```

**Using Hardhat Ignition:**

```bash
npx hardhat ignition deploy ignition/modules/Lock.js --network localhost
```

After deployment, update the contract address in `src/lib/lock.ts`.

### Running Contract Tests

```bash
npx hardhat test
```

Tests are located in `test/Lock.js` and cover:

- **Deployment**: correct unlock time, correct owner, funds stored, revert on past unlock time
- **Withdrawals**: revert if too early, revert if not owner, successful withdrawal, event emission, correct fund transfer

---

## API Reference

### `POST /api/verify`

Verifies an EIP-191 signed message to authenticate a wallet address.

**Request Body:**

```json
{
  "address": "0xYourWalletAddress",
  "message": "The message that was signed",
  "signature": "0xSignatureHex"
}
```

**Responses:**

| Status | Body |
|---|---|
| `200 OK` | `{ "success": true }` |
| `401 Unauthorized` | `{ "success": false, "error": "Invalid signature" }` |
| `405 Method Not Allowed` | `{ "success": false, "error": "Method Not Allowed" }` |
| `500 Internal Server Error` | `{ "success": false, "error": "Server error" }` |

---

## Supported Networks

| Network | Chain ID | Type |
|---|---|---|
| Ethereum Mainnet | 1 | Production |
| Ethereum Sepolia | 11155111 | Testnet |
| Hardhat Localhost | 31337 | Local development |

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please make sure your code passes linting before submitting:

```bash
npm run lint
```
