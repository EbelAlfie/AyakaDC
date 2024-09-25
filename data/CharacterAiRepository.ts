class CharacterAiRepository {
    socket = null 
    
    constructor() {
        this.setupWebSocket()
    }

    private setupWebSocket() {

    }

    private createWebSocket() {
        //this.socket = new WebSocket("wss://neo.character.ai/ws")
    }
}

module.exports = CharacterAiRepository