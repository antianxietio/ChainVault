"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import WalletButton from "@/components/WalletButton";
import LockInterface from "@/components/LockInterface";


export default function Homepage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />

      {/* How It Works */}
      <section className="py-24 px-6 bg-[#0c0c0c]">
        <h2 className="text-4xl font-semibold text-center mb-16 text-gold-400">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
          {[
            "Users lock NFTs in smart contracts to access loans.",
            "Oracles fetch real-time NFT prices for eligibility.",
            "Lenders provide funds and earn dynamic interest.",
            "If defaulted, NFTs are liquidated or transferred.",
          ].map((step, i) => (
            <div
              key={i}
              className="bg-[#1a1a1a] border border-gray-800 hover:border-violet-600 p-6 rounded-xl transition"
            >
              <span className="text-4xl font-bold text-violet-500 mb-4 block">
                {i + 1}
              </span>
              <p className="text-gray-300">{step}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-black text-white py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-gold-400">
          Key Features & Benefits
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Trustless Lending",
              desc: "Smart contracts eliminate intermediaries, ensuring transparent and secure lending.",
            },
            {
              title: "Real-Time Pricing",
              desc: "Oracles fetch accurate NFT valuations for fair collateral assessments.",
            },
            {
              title: "Secure Liquidation",
              desc: "Automated smart contract liquidation protects lenders from defaults.",
            },
            {
              title: "Multi-Chain Support",
              desc: "Compatible with Ethereum, Polygon, and Solana for broader adoption.",
            },
            {
              title: "Marketplace Integration",
              desc: "Seamless sync with top NFT marketplaces for easy onboarding.",
            },
            {
              title: "Fractional Ownership",
              desc: "Enable partial NFT lending to improve liquidity and access.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] border border-gray-800 hover:border-violet-600 transition rounded-xl p-6"
            >
              <h3 className="text-xl font-bold mb-3 text-gold-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-[#111111] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-6">
          Ready to Unlock Your NFT's Potential?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Connect your wallet and start borrowing or lending NFTs with full
          security and transparency.
        </p>
        <div className="flex justify-center">
        <WalletButton />
        </div>
        <div className="mt-12 ">
          <LockInterface />
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
