const { NoUserError } = require("../domain/CheckInResCode.js")
const { onlineApi, localApi } = require("./source/api")

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

    registerUser() {
        //onlineApi.login()
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

const hoyoRepository = new HoyolabRepository()

module.exports = hoyoRepository