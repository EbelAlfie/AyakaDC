const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");
const { CheckInButton } = require("./components/buttons.js");

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


        //await interaction.channel.send("Hello") ;
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

}

module.exports = Soul ;