const { ethers } = require("hardhat");

async function main() { const ResonantToken = await ethers.getContractFactory("ResonantToken"); const token = await ResonantToken.deploy(); await token.deployed();

console.log(ResonantToken ${token.address}); }

main().catch((error) => { console.error(error); process.exitCode = 1; });
