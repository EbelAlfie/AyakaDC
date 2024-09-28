const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, ButtonBuilder, ButtonStyle, REST, Routes, Collection } = require("discord.js");
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
        client.commands = new Collection()
        
        const foldersPath = this.path.join(__dirname, 'commands');
        const commandFolders = this.fs.readdirSync(foldersPath); 

        let commands = []

        for (const file of commandFolders) {
            const commandPath = this.path.join(foldersPath, file);
            const command = require(commandPath)
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command)
                commands.push(command.data.toJSON())
            } else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
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

    async command(interaction) {
        if (!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);

        if (!command) {
            console.error(`No command matching ${interaction.commandName} was found.`);
            return;
        }

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
            } else {
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }

}

module.exports = Soul ;