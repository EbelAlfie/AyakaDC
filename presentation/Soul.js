import { REST, Routes, Collection } from "discord.js";
import { ChatInputHandler } from "./InteractionHandler.js";
import { readdirSync } from "node:fs"
import { join } from "node:path"
import BaseCommand from "./models/BaseCommand.js";

export class Soul {
    isCheckIn = false

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        this.#registerCommand(client)
    }

    async reply(interaction) {
        if (interaction.author.bot) return

        await interaction.channel.send("Ad astra abysosque") ;
    }

    /** Register all available slash command */
    async #registerCommand(client) {
        client.commands = new Collection()

        const foldersPath = join(import.meta.dirname, 'commands');
        const commandFolders = readdirSync(foldersPath); 

        let commands = []

        for (const file of commandFolders) {
            const commandPath = join(foldersPath, file);
            const command = (await import(commandPath)).command
            
            if (command instanceof BaseCommand) {
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

    /** Command handler */
    async command(interaction) {
        if (interaction.isChatInputCommand()) ChatInputHandler(interaction);
    }

}