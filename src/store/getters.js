const getters = {
    token: state => state.user.token,
    personID: state => state.user.personID,
    photo: state => state.user.photo,
    name: state => state.user.name,
    newPersonID: state => state.user.newPersonID,
    account: state => state.web3.account,
    accountFilter: state => state.web3.accountFilter,
}
export default getters
