import { ActionRowBuilder, TextInputBuilder } from "discord.js"

const { TextInputStyle, ModalBuilder } = require("discord.js")

class RegisterModal {
    modalId: string = "registerModal"

    createModal() {
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
}

export const Modal =  { 
    registerModal: new RegisterModal()
 }