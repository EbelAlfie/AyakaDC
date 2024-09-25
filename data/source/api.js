import NodeRSA from "encrypt-rsa"
import { checkIn } from "./CheckIn"

class Api {
    key = null

    constructor() {
        this.#initApi()
    }

    #initApi() {
        this.key = new NodeRSA(process.env.MIHOYO_ENCRYPTION_KEY)
    }

    checkIn() {
        return checkIn()
    }

    login(user) {
        const encryptedEmail = this.key?.encrypt({
            text: request.email
        })

        const encryptedPass = this.key?.encryptStringWithRsaPublicKey({
            text: request.password
        })

        let newRequest = {
            email: encryptedEmail||"",
            password: encryptedPass||"",
            tokenType: 2
        }
        
        return login(newRequest)
            .then(result => {
                let cookies = result.headers["set-cookie"]
                if (cookies !== undefined)
                    localApi.login(request, cookies)
                return result
            })
    }

}

class Local {
    userData = new Map() //Pair of userdata and cookies

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