class HoyolabRepository {
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
        let url = 'https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=en-us'

        //axios.post(url, data)
    }

}

export const hoyoRepository = new HoyolabRepository()