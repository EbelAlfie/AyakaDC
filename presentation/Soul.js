import { REST, Routes, Collection } from "discord.js";
import { ChatInputHandler } from "./InteractionHandler.js";
import { readdirSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from 'url'

export class Soul {
    isCheckIn = false

    constructor() {
        //const Brain = require("./CharacterAi.js")  ;
        this.brain = null//new Brain() ;
    }

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        this.#registerCommand(client)
        //log in to character ai
        //this.brain.bringToLive() ;
    }

    async reply(interaction) {
        if (interaction.author.bot) return

        await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    async #registerCommand(client) {
        client.commands = new Collection()

        const foldersPath = join(import.meta.dirname, 'commands');
        const commandFolders = readdirSync(foldersPath); 

        let commands = []

        for (const file of commandFolders) {
            const commandPath = join(foldersPath, file);
            const command = (await import(`/${commandPath}`)).default
            
            if ('data' in command && 'execute' in command) {
                client.commands.set(command.data.name, command)
                commands.push(command.data.toJSON())
            } else {
                console.log(`[WARNING] The command at ${commandPath} is missing a required "data" or "execute" property.`);
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
        if (interaction.isChatInputCommand()) ChatInputHandler(interaction);
    }

}