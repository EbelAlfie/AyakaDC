import { SlashCommandBuilder } from "discord.js"

const RegisterCmd = () => {
    return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")
}

module.exports = {
    data: RegisterCmd(),
    async execute(interaction: OmitPartialGroupDMChannel<Message<boolean>>) {
        
    }
}