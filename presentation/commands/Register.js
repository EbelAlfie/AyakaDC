const { SlashCommandBuilder } = require("discord.js")
const { isModalError } = require("../utils.js")

class RegisterCommand {
    data = new SlashCommandBuilder()
        .setName("register")
        .setDescription("Command to register new user to hoyolab")

    async execute(interaction) {
        const hoyoRepository = require("../../data/HoyolabRepository.js")

        const modal = require("../components/modals.js").loginBuilder
        interaction.showModal(modal.createModal())
    
        // interaction.awaitModalSubmit({}) 
        // .then(result => {
        //     console.log(`result ${result}`)
        // })
    }

    handleError(error, interaction) {

    }

    onModalSubmitted(interaction) {
        let email = interaction.fields.getTextInputValue("email")
        if (isModalError(email.value, interaction)) return 
        let password = interaction.fields.getTextInputValue("password")
        if (isModalError(password.value, interaction)) return 


    }
}

const registerCmd = new RegisterCommand()
module.exports = registerCmd