var ScratchCrowdsale = artifacts.require("./ScratchCrowdsale.sol");

module.exports = function(deployer) {
  const startTime = Math.round((new Date(Date.now() - 86400000).getTime())/1000); // Yesterday
  const endTime = Math.round((new Date().getTime() + (86400000 * 20))/1000); // Today + 20 days
  deployer.deploy(ScratchCrowdsale,
    startTime,
    endTime,
    5,
    "0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE",
    2000000000000000000, // 2 ETH
    500000000000000000000 // 500 ETH
  );
};