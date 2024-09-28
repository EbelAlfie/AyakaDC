const { TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalBuilder } = require("discord.js")

const LoginModal = () => {
    const userInput = new TextInputBuilder()
    .setCustomId("email")
    .setLabel("Email")
    .setStyle(TextInputStyle.Short)
    .setRequired(true)

    const passInput = new TextInputBuilder()
    .setCustomId("password")
    .setLabel('Password')
    .setStyle(TextInputStyle.Short)
    .setRequired(true)

    const username = new ActionRowBuilder().addComponents(userInput)
    const password = new ActionRowBuilder().addComponents(passInput)

    return new ModalBuilder()
        .setCustomId("Register modal")
        .setTitle("Minta username")
        .setComponents(
            username, password
        )
}

module.exports = {
    LoginModal
}