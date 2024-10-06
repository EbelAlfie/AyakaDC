import { ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder } from "discord.js"

const CheckInButton = () => {
    const btnCheckIn = new ButtonBuilder()
        .setCustomId("checkIn")
        .setLabel('Check In')
        .setStyle(ButtonStyle.Primary)
    return new ActionRowBuilder()
        .addComponents(btnCheckIn)
}

const LoginButton = () => {
    const btnLogin = new ButtonBuilder()
        .setCustomId("login")
        .setLabel('Daftar')
        .setStyle(ButtonStyle.Primary)
    return new ActionRowBuilder()
        .addComponents(btnLogin) 
}

export {
    CheckInButton, LoginButton
}