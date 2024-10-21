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
        console.log(this.userData.has(userModel))
        console.log(this.userData)
        return this.userData.has(userModel)
    }

    storeUser(key, value) {
        console.log(this.userData.has(userModel))
        //console.log(`key ${key}, value: ${value}`)
        this.userData.set(key, value)
    }
}

let localApi = new Local() 
export default localApi