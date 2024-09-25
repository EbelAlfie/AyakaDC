import NodeRSA from "encrypt-rsa"

class Api {
    _encryption = ""
    key: NodeRSA|null = null

    constructor() {
        this._initApi()
    }

    _initApi() {
        this._encryption = process.env.MIHOYO_ENCRYPTION_KEY || ""
        this.key = new NodeRSA()
    }

    checkIn(header: CheckInHeader) {
        return checkIn(header)
    }

    login(request: LoginRequestBody) {
        //const email = encrypt()
        
        return login(request)
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