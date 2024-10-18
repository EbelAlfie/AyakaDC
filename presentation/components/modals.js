import { TextInputBuilder, TextInputStyle, ActionRowBuilder, ModalBuilder } from "discord.js"
import { BaseModal } from "../models/BaseModal.js"
import { TimeSpinner } from "./selection.js"

export class LoginModalBuilder extends BaseModal {
    static modalId = "registerModal"

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
            .setCustomId(LoginModalBuilder.modalId)
            .setTitle("Minta username")
            .setComponents(
                username, password
            )
    }
}