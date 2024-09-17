class HoyolabRepository {
    api = require("./api/CheckIn2.js")

    time = null
    timerId = "check_in"

    constructor() {}

    setCheckInHour(checkInTime) {
        clearInterval(this.timerId) 
        let time = new Date.parse(checkInTime) 
    }

    remindCheckIn(callback) {
        this.time = new Date.parse("12:00 am")
        console.log(this.time)
        setInterval(() => {
            let hourNow = new Date().getHours()
            console.log(this.time, hourNow)
            console.log(this.time === hourNow)
            if (this.time === hourNow) 
                this._checkIn()
                .catch(error => callback.onError(error))
                .then(result => callback.onSuccess(result))
        }, 60000)
    }

    _checkIn() {
        return this.api.checkIn()
    }

}

const hoyoRepository = new HoyolabRepository()

module.exports = hoyoRepository