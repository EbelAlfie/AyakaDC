import { NoUserError } from "../domain/CheckInResCode.js"
import onlineApi from "./source/api.js"
import localApi from "./source/local.js"

class HoyolabRepository {
    time = null
    timerId = "check_in"

    constructor() {}

    /** Public */
    scheduleCheckIn(time, callback) {
        if (this.#isUserLoggedIn()) 
            callback.onFailed(NoUserError) 
        else 
            this.#startReminder(time, callback)
    }

    registerUser(userModel) {
        onlineApi.login(userModel)
        .then(result => {
            
            let cookies = result.headers["set-cookie"]
            if (cookies !== undefined)
                localApi.storeUser(request, cookies)
            return result
        })
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

    #isUserLoggedIn() {
        return localApi.isUserListEmpty()
    }

}

export const hoyoRepository = new HoyolabRepository()