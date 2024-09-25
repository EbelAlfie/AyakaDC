import { Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"

const LoginCmd = () => {
    return new SlashCommandBuilder()
        .setName("login")
        .setDescription("Command to login to hoyolab")
}

module.exports = {
    data: LoginCmd(),
    async execute(interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        
    }
}