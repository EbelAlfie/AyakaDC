const { SlashCommandBuilder } = require("discord.js")
const hoyoRepository = require("../../data/HoyolabRepository")

const LoginCmd = () => {
    return new SlashCommandBuilder()
        .setName("login")
        .setDescription("Command to login to hoyolab")
}

module.exports = {
    data: LoginCmd(),
    async execute(interaction) {
        
    }
}