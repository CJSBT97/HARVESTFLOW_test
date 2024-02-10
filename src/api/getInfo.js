export function getMetaMask () {
    if (window.ethereum) {
        window.ethereum.enable().then((res) => {
            const accounts = window.ethereum.selectedAddress
            console.log(res, accounts)
        })
    } else {
        this.$message.error('Please install MetaMask!')
    }
}