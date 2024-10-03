const { SlashCommandBuilder } = require("discord.js")

const RegisterCmd = () => {
    return new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")
}

const execute = async (interaction) => {
    const hoyoRepository = require("../../data/HoyolabRepository.js")

    const modal = require("../components/modals.js").loginBuilder
    interaction.showModal(modal.createModal())

    interaction.awaitModalResponse() 
    .then(result => {
        console.log(`result ${result}`)
    })
}

const handleError = (error, interaction) => {

}

module.exports = {
    data: RegisterCmd(),
    execute: execute
}