import { readContract, writeContract } from "@wagmi/core";
import { config } from "../../config"; // <- your wagmi config
import { LockABI } from "../../contracts/LockABI";
import { Address } from "viem";

const LOCK_ADDRESS: Address = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Replace with your contract

export function useLockContract() {
  const lock = async () => {
    return await writeContract(config, {
      address: LOCK_ADDRESS,
      abi: LockABI,
      functionName: "lock",
    });
  };

  const withdraw = async () => {
    return await writeContract(config, {
      address: LOCK_ADDRESS,
      abi: LockABI,
      functionName: "withdraw",
    });
  };

  const getOwner = async () => {
    return await readContract(config, {
      address: LOCK_ADDRESS,
      abi: LockABI,
      functionName: "owner",
    });
  };

  const getUnlockTime = async () => {
    return await readContract(config, {
      address: LOCK_ADDRESS,
      abi: LockABI,
      functionName: "unlockTime",
    });
  };

  return {
    lock,
    withdraw,
    getOwner,
    getUnlockTime,
  };
}
