import NodeRSA from "encrypt-rsa"
import { login } from "../api/Login"
import { checkIn } from "../api/CheckIn"

class Api {
    private key: NodeRSA|null = null

    constructor() {
        this.initApi()
    }

    private initApi() {
        this.key = new NodeRSA(process.env.MIHOYO_ENCRYPTION_KEY)
    }

    checkIn(cookie: string) {
        return checkIn(cookie)
    }

    async login(request: UserData) {
        const encryptedEmail = this.key?.encrypt({
            text: request.email
        })

        const encryptedPass = this.key?.encryptStringWithRsaPublicKey({
            text: request.password
        })

        let newRequest: LoginRequestBody = {
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
    private userData: Map<UserData, string[]> = new Map() //Pair of userdata and cookies

    constructor() {}

    getAllUsers(): Map<UserData, string[]> {
        return this.userData
    }

    login(newUserData: UserData, cookies: string[]) {
        this.userData.set(newUserData, cookies)
    }

    isUserListEmpty(): boolean {
        return this.userData.size <= 0
    }
}

const onlineApi = new Api()
const localApi = new Local()

export { onlineApi, localApi }