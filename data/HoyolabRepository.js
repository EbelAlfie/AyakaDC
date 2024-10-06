import { NoUserError } from "../domain/CheckInResCode.js"
import { onlineApi, localApi } from "./source/api.js"

class HoyolabRepository {
    time = null
    timerId = "check_in"

    constructor() {}

    /** Public */
    scheduleCheckIn(time, callback) {
        if (this.isUserLoggedIn()) 
            callback.onFailed(NoUserError) 
        else 
            this.#startReminder(time, callback)
    }

    isUserLoggedIn() {
        return localApi.isUserListEmpty()
    }

    registerUser(userModel) {
        onlineApi.login(userModel)
    }

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

}

export const hoyoRepository = new HoyolabRepository()