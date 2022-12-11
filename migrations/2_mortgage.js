const Mortgage = artifacts.require("Mortgage");

module.exports = function(deployer) {
  deployer.deploy(Mortgage);
};
