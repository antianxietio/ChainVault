"use client";
import { useLockContract } from "@/hooks/useLockContract";
import { useState, useEffect } from "react";
import { format } from "date-fns";

export default function LockInterface() {
  const { lock, getOwner, getUnlockTime, withdraw } = useLockContract();
  const [owner, setOwner] = useState<string | null>(null);
  const [unlockTime, setUnlockTime] = useState<number | null>(null);
  const [txPending, setTxPending] = useState(false);
  const [withdrawing, setWithdrawing] = useState(false);

  // Fetch unlock time when wallet connects
  useEffect(() => {
    const fetchUnlockTime = async () => {
      try {
        const result = await getUnlockTime();
        setUnlockTime(Number(result));
      } catch (e) {
        console.error("Error fetching unlock time:", e);
      }
    };

    fetchUnlockTime();
  }, []);

  const handleLock = async () => {
    setTxPending(true);
    try {
      const tx = await lock();
      await tx.wait();
      alert("Lock successful!");
    } catch (error) {
      console.error(error);
      alert("Error locking.");
    } finally {
      setTxPending(false);
    }
  };

  const handleWithdraw = async () => {
    setWithdrawing(true);
    try {
      const tx = await withdraw();
      await tx.wait();
      alert("Withdraw successful!");
    } catch (error) {
      console.error(error);
      alert("Withdraw failed.");
    } finally {
      setWithdrawing(false);
    }
  };

  const fetchOwner = async () => {
    try {
      const result = await getOwner();
      setOwner(result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <section className="bg-[#1a1a1a] p-6 text-white max-w-2xl mx-auto my-20 rounded-xl border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-gold-400">Lock Contract Interface</h2>
      {owner && (
        <p className="text-sm mb-2">
          <strong>Contract Owner:</strong>{" "}
          <span className="text-gray-300 font-mono">{owner}</span>
        </p>
      )}
      {unlockTime && (
        <p className="text-sm mb-4">
          <strong>Unlock Time:</strong>{" "}
          <span className="text-violet-400">
            {format(new Date(unlockTime * 1000), "PPPppp")}
          </span>
        </p>
      )}

      <div className="flex flex-wrap gap-4">
        <button
          onClick={handleLock}
          disabled={txPending}
          className="bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl font-semibold"
        >
          {txPending ? "Locking..." : "Lock"}
        </button>

        <button
          onClick={fetchOwner}
          className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold"
        >
          Get Owner
        </button>

        <button
          onClick={handleWithdraw}
          disabled={withdrawing}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
        >
          {withdrawing ? "Withdrawing..." : "Withdraw"}
        </button>
      </div>
    </section>
  );
}
