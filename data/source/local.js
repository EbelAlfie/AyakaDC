class Local {
    userData = new Map() //Pair of userdata and cookies

    constructor() {}

    allUsers() {
        return this.userData
    }

    isUserListEmpty() {
        return this.userData.size >= 0
    }

    storeUser(newUserData) {
        userData.push(newUserData)
    }
}

let localApi = new Local() 
export default localApi