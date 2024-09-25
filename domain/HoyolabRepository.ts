interface HoyolabRepository {
    scheduleCheckIn: (time: string) => void

    isUserLoggedIn: () => boolean
    

}