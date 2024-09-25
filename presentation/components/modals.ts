import { ActionRowBuilder, TextInputBuilder } from "discord.js"

const { TextInputStyle, ModalBuilder } = require("discord.js")

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

        const username = new ActionRowBuilder<TextInputBuilder>()
            .addComponents(userInput)
        const password = new ActionRowBuilder<TextInputBuilder>()
            .addComponents(passInput)

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