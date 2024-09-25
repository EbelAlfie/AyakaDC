import NodeRSA from "encrypt-rsa"

class Api {
    key: NodeRSA|null = null

    constructor() {
        this._initApi()
    }

    _initApi() {
        this.key = new NodeRSA(process.env.MIHOYO_ENCRYPTION_KEY)
    }

    checkIn(header: CheckInHeader) {
        return checkIn(header)
    }

    login(request: LoginRequestBody) {
        const encryptedEmail = this.key?.encrypt({
            text: request.email
        })

        const encryptedPass = this.key?.encryptStringWithRsaPublicKey({
            text: request.password
        })

        let newRequest: LoginRequestBody = {
            email: encryptedEmail||"",
            password: encryptedPass||"",
            tokenType: request.tokenType
        }
        
        return login(newRequest)
    }

}

class Local {
    userData: Map<UserData, string> = new Map() //Pair of userdata and cookies

    constructor() {}

    allUsers() {
        return this.userData
    }

    login(newUserData: UserData) {

    }

    isUserListEmpty(): boolean {
        return this.userData.size <= 0
    }
}

const onlineApi = new Api()
const localApi = new Local()

export { onlineApi, localApi }