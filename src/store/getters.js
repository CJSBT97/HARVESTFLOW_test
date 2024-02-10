const getters = {
    token: state => state.user.token,
    personID: state => state.user.personID,
    photo: state => state.user.photo,
    name: state => state.user.name,
    newPersonID: state => state.user.newPersonID,
}
export default getters
