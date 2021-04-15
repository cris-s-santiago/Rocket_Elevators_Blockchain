const path = require("path");

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "192.168.2.17",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      host: "192.168.2.17",
      port: 7545
    }
  }
};