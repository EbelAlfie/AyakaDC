const { SlashCommandBuilder } = require("discord.js")

const RegisterCmd = () => {
    return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")
}

const execute = async (interaction) => {
    const hoyoRepository = require("../../data/HoyolabRepository.js")

    const modal = require("../components/modals.js").LoginModal()
    interaction.showModal(modal)
}

const handleError = (error, interaction) => {

}

module.exports = {
    data: RegisterCmd(),
    execute: execute
}