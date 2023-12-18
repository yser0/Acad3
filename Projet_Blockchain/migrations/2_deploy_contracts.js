// Filename: 2_deploy_contracts.js

const IdentityManagement = artifacts.require("IdentityManagement");

module.exports = function(deployer) {
    deployer.deploy(IdentityManagement);
};