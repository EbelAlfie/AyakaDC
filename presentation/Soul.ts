import { Client, Message, OmitPartialGroupDMChannel, REST, Routes } from "discord.js";
import { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js" ;
import Brain from "./CharacterAi";

class Soul {
    fs = require('node:fs');
    path = require('node:path');
    brain: Brain

    constructor() {
        const Brain = require("./CharacterAi.js")  ;
        this.brain = new Brain() ;
    }

    onReady(client: Client) {
        console.log(`Logged in as ${client.user?.tag}`) ;
        this._registerCommand(client) 
        //log in to character ai
        this.brain.bringToLive() ;
    }

    async reply(interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        if (interaction.author.bot) return 
        
        // await interaction.reply({
        //     content: "Test",
        //     components: [modal]
        // })

        //await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    async _registerCommand(client : Client) {
        const foldersPath = this.path.join(__dirname, 'commands');
        const commandFolders = this.fs.readdirSync(foldersPath); 

        let commands = []

        for (const file of commandFolders) {
            const commandPath = this.path.join(foldersPath, file);
            const command = require(commandPath)
            if ('data' in command && 'execute' in command) {
                commands.push(command.data.toJSON())
            } else {
                console.log(`[WARNING] The command at ${commandPath} is missing a required "data" or "execute" property.`)
            }
        }

        let rest = new REST().setToken(client.token || "")

        if (client.application === null) return 
        rest.put(
            Routes.applicationCommands(client.application.id),
            { body: commands },
        ).then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        });
    }

    showCheckInMessage(result: CheckInResponse, interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        let message = ""
        if (result.retcode < 0)
            message = result.message
        else 
            message = "Sukses check in ya, traveler sayang"

        interaction.channel.send(message)
    }
}

module.exports = Soul ;