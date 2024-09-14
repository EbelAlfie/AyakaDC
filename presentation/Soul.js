const checkIn = require("../data/api/CheckIn2.js");

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
        if (interaction.author.bot) return 
        if (interaction.content == "checkin2") {
            this.checkIn(interaction)
            return 
        }
            
        await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    checkIn(interaction) {
        let hoyoLab = require("../data/api/CheckIn2.js")
        hoyoLab.checkIn()
        .catch(error => {
            interaction.channel.send("Maafkan aku traveler, tapi kamu gagal check in hiks")
        })
        .then(result => this.showCheckInMessage(result, interaction))
    }

    showCheckInMessage(result, interaction) {
        let message = ""
        if (result.retcode != 0)
            message = "Sukses check in ya, traveler sayang"
        else 
            message = result.message

        interaction.channel.send(result.message)
    }

    showSpinner(data) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(id)
					.setPlaceholder(defaultValue)
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);
    }
}

module.exports = Soul ;