
export class Api {
    _encryption = ""

    constructor() {
        this._initApi()
    }

    _initApi() {
        this._encryption = process.env.MIHOYO_ENCRYPTION_KEY
    }

    checkIn() {

    }

    login() {
        
    }

}