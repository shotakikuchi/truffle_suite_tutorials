var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "illegal where alone core mandate acid annual enough cash series security void";

module.exports = {
    // See <http://truffleframework.com/docs/advanced/configuration>
    // for more about customizing your Truffle configuration!
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: () => {
                return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/v3/dbcb22f9617a40f2addaaabf3b440f10");
            },
            network_id: 3,
            as: 3000000,
            gasPrice: 10000000000
        }
    }
};
