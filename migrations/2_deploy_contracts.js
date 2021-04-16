const MyStringStore = artifacts.require("MyStringStore");
// const MaterialsProvider = artifacts.require("MaterialsProvider");

module.exports = function(deployer) {
  deployer.deploy(MyStringStore);
  // deployer.deploy(MaterialsProvider);
};
