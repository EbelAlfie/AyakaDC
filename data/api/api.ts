import NodeRSA from "encrypt-rsa"

export class Api {
    _encryption: String| undefined = ""
    key: NodeRSA | null = null

    constructor() {
        this._initApi()
    }

    _initApi() {
        this._encryption = process.env.MIHOYO_ENCRYPTION_KEY
        this.key = new NodeRSA()
    }

    checkIn() {

    }

    login() {
        
    }

}