import NodeRSA from "encrypt-rsa"
import { publicEncrypt } from "node:crypto"
import { checkIn } from "./CheckIn.js"
import { login } from "./Login.js"
import 'dotenv/config'
import { env } from 'node:process'
import encryptStringWithRsaPublicKey, { encryptWithPublicKey } from "../util.js"

class Api {
    key = null

    constructor() {
        this.#initApi()
    }

    #initApi() {
        const publicKey = env.MIHOYO_ENCRYPTION_KEY
        this.key = new NodeRSA.default(publicKey, "", 2048)
    }

    checkIn() {
        return checkIn()
    }

    async login(user) {
        const publicKey = env.MIHOYO_ENCRYPTION_KEY
        const encryptedEmail = encryptWithPublicKey({
            message: user.email,
            publicKey: publicKey
        })

        const encryptedPass = encryptWithPublicKey({
            message: user.password,
            publicKey: publicKey
        })

        console.log(encryptedEmail)

        let newRequest = {
            account: encryptedEmail||"",
            password: encryptedPass||"",
            tokenType: 2
        }
        
        return login(newRequest)
            .then(result => {
                console.log(result.data)
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

    isUserListEmpty() {
        return this.userData.size >= 0
    }

    login(newUserData) {
        userData.push(newUserData)
    }
}

const onlineApi = new Api()

const localApi = new Local()

export { onlineApi, localApi }