import { onlineApi, localApi } from "./source/api"

class HoyolabRepositoryImpl implements HoyolabRepository {
    time: number | null = null
    timerId: string = "check_in"

    constructor() {}

    /** Public */
    scheduleCheckIn(
        time: string,
        callback: BasicCallback<CheckInResponse>
    ) {
        if (this.isUserLoggedIn()) 
            callback.onError(NoUserError) 
        else 
            this.remindCheckIn(time, callback)
    }

    isUserLoggedIn(): boolean {
        return this.userExist()
    }

    registerUser() {
        //onlineApi.login()
    }

    private remindCheckIn(
        checkInTime: string,
        callback: BasicCallback<CheckInResponse>
    ) {
        this.time = Date.parse(checkInTime)
        console.log(this.time)
        setInterval(() => {
            let hourNow = new Date().getHours()
            console.log(this.time, hourNow)
            console.log(this.time === hourNow)
            if (this.time !== hourNow) return
            
            this.checkInAllUser(callback)
        }, 60000)
    }

    private checkInAllUser(callback: BasicCallback<CheckInResponse>) {
        let userData = localApi.getAllUsers()
        userData.forEach(item => {
            onlineApi.checkIn(item.join("; "))
            .catch((error : Error) => callback.onError(error))
            .then((result: CheckInResponse) => callback.onSuccess(result))
        })
        
    }

    private checkInByUserId() {
        
    }

    private userExist() : boolean{
        return localApi.isUserListEmpty()
    }

}

const hoyoRepository = new HoyolabRepositoryImpl()

module.exports = hoyoRepository