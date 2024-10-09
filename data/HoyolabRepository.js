import { NoUserError, ResponseSuccess } from "../domain/CheckInResCode.js"
import onlineApi from "./source/api.js"
import localApi from "./source/local.js"

class HoyolabRepository {
    time = null
    timerId = "check_in"

    constructor() {}

    /** Public */
    scheduleCheckIn(time, callback) {
        if (this.#noUserExist()) 
            callback.onFailed(NoUserError) 
        else 
            this.#startReminder(time, callback)
    }

    async registerUser(userModel, callback) {
        if (localApi.existingUser(userModel))
            callback.onFailed(Error("User already exist"))
        return onlineApi.login(userModel)
        .then(result => {
            const data = result.data
            switch(data.retcode) {
                case ResponseSuccess : {
                    console.log(result.headers)
                    let cookies = result.headers.get("set-cookie")
                    if (cookies !== undefined) {
                        localApi.storeUser(userModel, cookies)
                        callback.onSuccess()
                    } else 
                        callback.onFailed(Error("No cookie :(")) 
                    break
                }
                default: 
                    callback.onFailed(Error(data.message))
            }
            return result
        })
        .catch(error => callback.onFailed(error))
    }

    /** Privates */
    #startReminder(checkInTime, callback) {
        this.time = Date.parse(checkInTime)
        console.log(this.time)
        setInterval(() => {
            let hourNow = new Date().getHours()
            console.log(this.time, hourNow)
            console.log(this.time === hourNow)
            if (this.time !== hourNow) return
            
            this.#checkInAllUser(callback)
        }, 60000)
    }

    #checkInAllUser(callback) {
        let userData = localApi.getAllUsers()
        userData.forEach(item => {
            onlineApi.checkIn(item.join("; "))
            .catch(error => callback.onError(error))
            .then(result => callback.onSuccess(result))
        })
    }

    #noUserExist() {
        return localApi.isUserListEmpty()
    }

}

export const hoyoRepository = new HoyolabRepository()