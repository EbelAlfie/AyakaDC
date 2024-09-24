import NodeRSA from "encrypt-rsa"
import { checkIn } from "./CheckIn"

class Api {
    _encryption = ""
    key = null

    constructor() {
        this._initApi()
    }

    _initApi() {
        this._encryption = process.env.MIHOYO_ENCRYPTION_KEY
        this.key = new NodeRSA()
    }

    checkIn() {
        return checkIn()
    }

    login(request) {
        //const email = encrypt()
        
        return login(requestBody)
    }

}

class Local {
    userData = null //Pair of userdata and cookies

    constructor() {}

    allUsers() {
        return this.userData
    }

    login(newUserData) {
        userData.push(newUserData)
    }
}

const onlineApi = Api()

const localApi = Local()

export { onlineApi, localApi }