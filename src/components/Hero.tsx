"use client";

import { Wallet } from "ethers";
import WalletButton from "./WalletButton";
import AuthButton from "./AuthButton";


export default function HeroSection() {
  return (
    <section className="text-center py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
      <h1 className="text-5xl md:text-7xl font-bold text-gold-400 mb-6">
        Unlock NFT Liquidity
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
        Borrow and lend using NFTs as collateral. Secure. Trustless. Instant.
      </p>
      <div className="flex justify-center gap-4">
      <WalletButton />
      <AuthButton />
      </div>
    </section>
  );
}
