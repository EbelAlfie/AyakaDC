const NotLoggedIn = -100
const AlreadyCheckIn = -5003

class HoyolabRepository {
    api = require("./api/CheckIn2.js")

    time = null
    timerId = "check_in"

    constructor() {}

    setCheckInHour(checkInTime) {
        clearInterval(this.timerId) 
        let time = new Date.parse(checkInTime) 
    }

    remindCheckIn() {
        setInterval(() => {
            let hourNow = new Date().getHours()
            if (this.time == hourNow) this.checkIn()
        }, 60000)
    }

    checkIn() {
        return this.api.checkIn()
    }

}

const hoyoRepository = new HoyolabRepository()

module.exports = hoyoRepository