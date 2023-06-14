export default {

    isLoggedIn(user) {
        return user !== null
    },
    getUserRole(userRole) {
        return userRole
    },
    getUser(state) {
        return state;
    },

    getUserFullName(state) {
        return `${ state.user.first_name} ${ state.user.last_name }`;
    }

}

//this.$store.map