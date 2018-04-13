 var HDWalletProvider = require("truffle-hdwallet-provider");
  var infura_apikey = "xsm9cg3RhL50Dj0pC0QP"; // Either use this key or get yours at https://infura.io/signup. It's free.
  var mnemonic = "eternal route width abandon army help error vibrant inhale wolf lava plastic";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
      ganache: {
        host: "localhost",
        port: 7545,
        gas: 6500000,
        network_id: "*"
      },
        ropsten:  {
         provider: new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey),
         network_id: 3,
         gas: 4500000
        },
       rinkeby: {
         host: "localhost",
         port: 8545,
         network_id: 4,// renkeby test net
         gas: 4700000
       }
    },
    solc: {
       optimizer: {
         enabled: true,
         runs: 200
       }
    }
};
