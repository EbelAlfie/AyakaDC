class Soul {
    constructor() {
        const Brain = require("./CharacterAi.js")  ;
        this.brain = new Brain() ;
    }

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        //log in to character ai
        this.brain.bringToLive() ;
    }

    async reply(interaction) {
        //Reply based on character ai as brain
        console.log(`${interaction}`) ;
        if (interaction.author.bot) return 
        await interaction.channel.send("Hello") ;
        await this.brain.goTo() ;
    }
}

module.exports = Soul ;