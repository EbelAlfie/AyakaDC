const { SlashCommandBuilder } = require("discord.js")
const hoyoRepository = require("../../data/HoyolabRepository")

const CheckInSlashCmd = () => {
    return new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
}

module.exports = {
    data: CheckInSlashCmd(),
    async execute(interaction) { 
        if (interaction.author.bot) return
        //show date time modal 
        const date = Date.parse(interaction.content)
        hoyoRepository.scheduleCheckIn(date)
    }
}