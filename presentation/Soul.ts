import { Client, Message, OmitPartialGroupDMChannel } from "discord.js";
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js" ;
import Brain from "./CharacterAi";

class Soul {
    brain: Brain
    hoyoRepository = require("../data/HoyolabRepository.js")
    isCheckIn = false

    constructor() {
        const Brain = require("./CharacterAi.js")  ;
        this.brain = new Brain() ;
    }

    onReady(client: Client) {
        console.log(`Logged in as ${client.user?.tag}`) ;
        
        //log in to character ai
        this.brain.bringToLive() ;
    }

    async reply(interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        if (interaction.author.bot) return 

        if (interaction.content === "checkin2") 
            this.isCheckIn = true
        
        if (this.isCheckIn === true) {
            this.checkIn(interaction)
            return
        }
        this.isCheckIn = false
        
        let modal = this._inputModal()

        // await interaction.reply({
        //     content: "Test",
        //     components: [modal]
        // })

        //await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    async checkIn(interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        this.hoyoRepository.remindCheckIn({
            onSuccess: (result: CheckInResponse) => this.showCheckInMessage(result, interaction),
            onFailed: (error: Error) => {
                interaction.channel.send("Maafkan aku traveler, tapi kamu gagal check in hiks")
            }
        })
    }

    showCheckInMessage(result: CheckInResponse, interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        let message = ""
        if (result.retcode < 0)
            message = result.message
        else 
            message = "Sukses check in ya, traveler sayang"

        interaction.channel.send(message)
    }

    _showSpinner() {
        // const row = new MessageActionRow()
		// 	.addComponents(
		// 		new MessageSelectMenu()
		// 			.setCustomId(id)
		// 			.setPlaceholder(defaultValue)
		// 			.addOptions(),
		// 	);
    }

    _inputModal(): ModalBuilder {
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

        const username = new ActionRowBuilder<TextInputBuilder>()
            .addComponents(userInput)
        const password = new ActionRowBuilder<TextInputBuilder>()
            .addComponents(passInput)

        return new ModalBuilder()
            .addComponents(
                username, password
            )
            .setTitle(
                "Minta username"
            )
    }

    buttonLogin() {
        return new ButtonBuilder()
            .setCustomId("btn-login")
            .setLabel("Login")
            .setStyle(ButtonStyle.Primary)    
    }
}

module.exports = Soul ;