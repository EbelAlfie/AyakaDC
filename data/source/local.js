class Local {
    userData = new Map() //Pair of userdata and cookies

    constructor() {}

    allUsers() {
        return this.userData
    }

    isUserListEmpty() {
        return this.userData.size >= 0
    }

    existingUser(userModel) {
        return this.userData.has(userModel)
    }

    storeUser(key, value) {
        console.log(key, value)
        this.userData.set(key, value)
    }
}

let localApi = new Local() 
export default localApi