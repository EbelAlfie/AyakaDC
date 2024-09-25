const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle, REST, Routes } = require("discord.js");
const { CheckInButton } = require("./components/buttons.js");

class Soul {
    fs = require('node:fs');
    path = require('node:path');
    hoyoRepository = require("../data/HoyolabRepository.js")
    isCheckIn = false

    constructor() {
        const Brain = require("./CharacterAi.js")  ;
        this.brain = new Brain() ;
    }

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        this.#registerCommand(client)
        //log in to character ai
        this.brain.bringToLive() ;
    }

    async reply(interaction) {
        if (interaction.author.bot) return

        await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    async #registerCommand(client) {
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

        let rest = new REST().setToken(client.token)

        rest.put(
            Routes.applicationCommands(client.application.id),
            { body: commands },
        ).then(result => {
            console.log(result)
        }).catch(error => {
            console.log(error)
        });
    }

}

module.exports = Soul ;