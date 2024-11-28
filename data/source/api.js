import { checkIn, login } from "./service.js"
import 'dotenv/config'
import { env } from 'node:process'
import { encryptWithPublicKey } from "../util.js"

class Api {
    key = null

    constructor() {
        this.#initApi()
    }

    #initApi() {}

    checkIn(cookie) {
        return checkIn(cookie)
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

        let newRequest = {
            account: encryptedEmail||"",
            password: encryptedPass||"",
            tokenType: 2
        }
        
        return login(newRequest)
    }

}

const onlineApi = new Api()
export default onlineApi 