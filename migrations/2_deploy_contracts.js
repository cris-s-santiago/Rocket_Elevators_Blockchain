const ProjectOffice = artifacts.require("ProjectOffice");
const MaterialProvider = artifacts.require("MaterialProvider");
const SolutionManufacturing = artifacts.require("SolutionManufacturing");
const QualitySecurity = artifacts.require("QualitySecurity");

module.exports = function(deployer) {
  deployer.deploy(ProjectOffice);
  deployer.deploy(MaterialProvider);
  deployer.deploy(SolutionManufacturing);
  deployer.deploy(QualitySecurity);
};
