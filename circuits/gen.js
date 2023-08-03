const Wallet = require('ethereumjs-wallet');

function generateRandomEthereumAddresses(n) {
    let addresses = [];
    for (let i = 0; i < n; i++) {
        const wallet = Wallet.default.generate();
        addresses.push(wallet.getChecksumAddressString());
    }
    return addresses;
}

console.log(generateRandomEthereumAddresses(1000));
