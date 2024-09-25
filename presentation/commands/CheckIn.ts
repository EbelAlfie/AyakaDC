import { Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"

const CheckInCmd = () => {
    return new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
}

module.exports = {
    data: CheckInCmd(),
    async execute(interaction: OmitPartialGroupDMChannel<Message<boolean>>) { 
        if (interaction.author.bot) return
        const hoyoRepository = require("../../data/HoyolabRepository")
        //show date time modal 
        const date = Date.parse(interaction.content)
        hoyoRepository.scheduleCheckIn(date)
    }
}