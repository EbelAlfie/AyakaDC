interface HoyolabRepository {
    scheduleCheckIn: (
        time: string,
        callback: BasicCallback<CheckInResponse>
    ) => void

    isUserLoggedIn: () => boolean
    

}