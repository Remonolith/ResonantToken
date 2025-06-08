require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { PRIVATE_KEY, INFURA_PROJECT_ID } = process.env;

module.exports = {
  solidity: "0.8.20",
    networks: {
        sepolia: {
              url: `https://sepolia.infura.io/v3/${INFURA_PROJECT_ID}`,
                    accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
                        },
                          },
                          };