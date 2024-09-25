const { ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder } = require("discord.js")

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

module.exports = {
    CheckInButton, LoginButton
}