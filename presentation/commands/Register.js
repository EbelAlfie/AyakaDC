const { SlashCommandBuilder } = require("discord.js")
const hoyoRepository = require("../../data/HoyolabRepository")

const RegisterCmd = () => {
    return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")
}

const execute = async (interaction) => {
    const hoyoRepository = require("../../data/HoyolabRepository")

    hoyoRepository.addUser(

    )

}

const handleError = (error, interaction) => {

}

module.exports = {
    data: RegisterCmd(),
    execute: execute
}