import { TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalBuilder } from "discord.js"
export class LoginModalBuilder {
    modalId = "registerModal"

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
    
        const username = new ActionRowBuilder().addComponents(userInput)
        const password = new ActionRowBuilder().addComponents(passInput)
    
        return new ModalBuilder()
            .setCustomId(this.modalId)
            .setTitle("Minta username")
            .setComponents(
                username, password
            )
    }
}