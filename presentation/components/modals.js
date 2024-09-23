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

    const row = new ActionRowBuilder()
        .addComponents(userInput, passInput)

    return new ModalBuilder()
        .addComponents(
            username, password
        )
        .setTitle(
            "Minta username"
        )
}

module.exports = {
    LoginModal
}