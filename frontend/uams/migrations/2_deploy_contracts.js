const AccountManagement = artifacts.require("AccountManagement");

module.exports = function(deployer) {
  deployer.deploy(AccountManagement);
};
