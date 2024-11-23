class Local {
    userData = new Map() //Pair of email and cookies

    constructor() {}

    allUsers() {
        return this.userData
    }

    isUserListEmpty() {
        return this.userData.size <= 0
    }

    existingUser(email) {
        return this.userData.has(email)
    }

    storeUser(email, cookie) {
        this.userData.set(email, cookie)
    }
}

let localApi = new Local() 
export default localApi