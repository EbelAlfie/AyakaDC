const { SlashCommandBuilder } = require("discord.js")
const { NoUserError } = require("../../domain/CheckInResCode.js")
const { BaseCommand } = require("../models/BaseCommand.js")

class CheckInCommand extends BaseCommand {
    data = new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")

    async execute(interaction) {
        const hoyoRepository = require("../../data/HoyolabRepository.js")

        hoyoRepository.scheduleCheckIn(
            "",
            {
                onSuccess: result => this.sendCheckInMessage(result, interaction),
                onFailed: error => this.handleError(error, interaction)
            }
        )
    }

    async handleError(error, interaction) {
        switch(error) {
            case NoUserError: {
                //Show modal
                const registerModule = require("./Register.js")
                await registerModule.execute(interaction)
            }
            default: 
                interaction.reply('Maaf yaa lagi error')
        }
    }
    
    sendCheckInMessage(result, interaction) {
        let message = ""
        if (result.retcode < 0)
            message = result.message
        else 
            message = "Sukses check in ya, traveler sayang"
    
        interaction.channel.send(message)
    }
}

const checkInCommand = new CheckInCommand()
module.exports = checkInCommand