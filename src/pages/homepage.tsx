"use client";

import Footer from "@/components/footer";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="text-center py-28 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold text-gold-400 mb-6">
          Unlock NFT Liquidity
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10">
          Borrow and lend using NFTs as collateral. Secure. Trustless. Instant.
        </p>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition">
          Get Started
        </button>
      </section>

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
              <h3 className="text-xl font-bold mb-3 text-gold-300">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="py-20 px-6 bg-[#111111] text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gold-400 mb-6">
          Ready to Unlock Your NFT's Potential?
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
          Connect your wallet and start borrowing or lending NFTs with full security and transparency.
        </p>
        <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-3 px-6 rounded-xl text-lg transition">
          Connect Wallet
        </button>
      </section>
      <Footer />
    </main>
  );
}
