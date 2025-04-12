import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const balance = await deployer.provider!.getBalance(deployer.address);
  console.log("Deployer balance:", ethers.formatEther(balance), "ETH");

  // Replace `MyContract` with `Lock`
  const unlockTime = Math.floor(Date.now() / 1000) + 60; // unlock in 1 minute
  const Lock = await ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, {
    value: ethers.parseEther("1.0"), // optional: initial ETH
  });

  await lock.waitForDeployment();

  console.log("Lock contract deployed at:", await lock.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
