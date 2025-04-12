"use client";

import { useSignMessage } from "wagmi";
import { useAccount } from "wagmi";

export default function AuthButton() {
  const { signMessageAsync } = useSignMessage();
  const { address, isConnected } = useAccount();

  const handleSignIn = async () => {
    const message = `Sign this message to authenticate with ChainVault. Address: ${address}`;

    try {
      const signature = await signMessageAsync({ message });

      const res = await fetch("/api/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ address, message, signature }),
      });

      const result = await res.json();
      if (result.success) {
        alert("✅ Authenticated!");
      } else {
        alert("❌ Verification failed.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return isConnected ? (
    <button
      onClick={handleSignIn}
      className="mt-4 px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-xl text-white font-semibold"
    >
      Sign In with Wallet
    </button>
  ) : null;
}
