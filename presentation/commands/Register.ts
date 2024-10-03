import { CommandInteraction, Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"
import { BaseCommand } from "./BaseCommand"
import { Modal } from "../components/modals"

class RegisterCommand implements BaseCommand<void> {
    commandBuilder = () => {
        return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")
    }

    execute = async (interaction: CommandInteraction) => {
        const modal = Modal.registerModal.createModal()
        interaction.showModal(modal)
    }

    handleError = (error: Error, interaction: CommandInteraction) => {

    }
}

export default new RegisterCommand()