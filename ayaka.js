class Ayaka {
    constructor() {}

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        //log in to character ai
    }

    reply(interaction) {
        //Reply based on character ai as brain
        if (interaction === "Hei") 
            interaction.reply("Hai juga")
    }
}

module.exports = Ayaka ;