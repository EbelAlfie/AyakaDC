import { onlineApi, localApi } from "./source/api"

class HoyolabRepositoryImpl implements HoyolabRepository {
    time: number | null = null
    timerId: string = "check_in"

    constructor() {}

    /** Public */
    scheduleCheckIn(time: string) {
        if (this.isUserLoggedIn()) return 
        this._setCheckInHour(time)
    }

    isUserLoggedIn(): boolean {
        return this._userExist()
    }

    addUser() {

    }

    registerUser() {
        
    }
    
    _setCheckInHour(checkInTime: string) {
        clearInterval(this.timerId) 
        let time = Date.parse(checkInTime) 
    }

    _remindCheckIn(callback: BasicCallback<CheckInResponse>) {
        this.time = Date.parse("12:00 am")
        console.log(this.time)
        setInterval(() => {
            let hourNow = new Date().getHours()
            console.log(this.time, hourNow)
            console.log(this.time === hourNow)
            if (this.time === hourNow) 
                this._checkIn()
                .catch((error : Error) => callback.onError(error))
                .then((result: CheckInResponse) => callback.onSuccess(result))
        }, 60000)
    }

    _userExist() : boolean{
        return localApi.isUserListEmpty()
    }

    _checkIn() {
        return onlineApi.checkIn()
    }

    _login() {
        return onlineApi.login()
    }

    _register() {

    }

}

const hoyoRepository = new HoyolabRepositoryImpl()

module.exports = hoyoRepository