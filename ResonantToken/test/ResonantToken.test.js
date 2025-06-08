const { expect } = require("chai");

describe("ResonantToken", function () { it("Should deploy and assign total supply to owner", async function () { const [owner] = await ethers.getSigners(); const Token = await ethers.getContractFactory("ResonantToken"); const token = await Token.deploy(); await token.deployed();

const ownerBalance = await token.balanceOf(owner.address);
const totalSupply = await token.totalSupply();
expect(ownerBalance).to.equal(totalSupply);

}); });
