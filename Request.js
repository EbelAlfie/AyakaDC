class Request {
    constructor(config) {
        this.userToken = config.userToken 
        this.character = config.charId 
        const { messageRequest, messageRequestHeader } = require("./RequestModel.js") ;
    } 

    fetchHistory() {

    }

    fetchMessage(message) {

    }

    
}