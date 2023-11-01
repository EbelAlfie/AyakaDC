class Ayaka {
    constructor(config) {
        this.ayakaId = config.ayakaId ;
        this.userId = config.userId ;
        this.brain = new CharacterAi() ;
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
    }
}

module.exports = Ayaka ;