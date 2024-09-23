class HoyolabRepository {
    api = require("./api/CheckIn.js")

    time = null
    timerId = "check_in"

    constructor() {}

    scheduleCheckIn(checkInTime) {
        clearInterval(this.timerId) 
        let time = new Date.parse(checkInTime) 
    }

    _startReminder(callback) {
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