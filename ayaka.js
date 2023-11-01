class Ayaka {
    constructor() {
        //this.brain = new CharacterAi() ;
    }

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        //log in to character ai
    }

    async reply(interaction) {
        //Reply based on character ai as brain
        console.log(`${interaction}`) ;
        await interaction.reply("Hai juga")
    }
}

module.exports = Ayaka ;