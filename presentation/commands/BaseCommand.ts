import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export interface BaseCommand <type>{
    commandBuilder: () => SlashCommandBuilder
    execute: (interaction: CommandInteraction) => Promise<type>
    handleError: (error: Error, interaction: CommandInteraction) => void
}