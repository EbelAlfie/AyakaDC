const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require("discord.js");

class Soul {
    hoyoRepository = require("../data/HoyolabRepository.js")
    isCheckIn = false

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
        if (interaction.author.bot) return 

        if (interaction.content === "checkin2") 
            this.checkIn = true
        
        if (this.checkIn === true) {
            
            this.checkIn(interaction)
            return
        }
        this.checkIn = false
        
        let modal = this._inputModal()

        await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    async checkIn(interaction) {
        this.hoyoRepository.remindCheckIn({
            onSuccess: result => this.showCheckInMessage(result, interaction),
            onFailed: error => {
                interaction.channel.send("Maafkan aku traveler, tapi kamu gagal check in hiks")
            }
        })
    }

    showCheckInMessage(result, interaction) {
        let message = ""
        if (result.retcode < 0)
            message = result.message
        else 
            message = "Sukses check in ya, traveler sayang"

        interaction.channel.send(message)
    }

    _showSpinner(data) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(id)
					.setPlaceholder(defaultValue)
					.addOptions(),
			);
    }

    _inputModal() {
        const userInput = new TextInputBuilder()
        .setCustomId("email")
        .setLabel("Email")
        .setStyle(TextInputStyle.Short)
        .setRequired(true)

        const passInput = new TextInputBuilder()
        .setCustomId("password")
        .setLabel('Password')
        .setStyle(TextInputStyle.Short)
        .setRequired(true)

        const username = new ActionRowBuilder().addComponents(userInput)
        const password = new ActionRowBuilder().addComponents(passInput)

        return new ModalBuilder()
            .addComponents(
                username, password
            )
    }
}

module.exports = Soul ;