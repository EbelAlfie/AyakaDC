import { Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"

const RegisterCmd = () => {
    return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register user to hoyolab")
}

const execute = async (
    interaction: OmitPartialGroupDMChannel<Message<boolean>>
) => {
    if (interaction.author.bot) return
    const hoyoRepository = require("../../data/HoyolabRepository")

    hoyoRepository.addUser(

    )

}

const handleError = (
    error: Error, 
    interaction: OmitPartialGroupDMChannel<Message<boolean>>
) => {

}

module.exports = {
    data: RegisterCmd(),
    execute: execute
}