const { SlashCommandBuilder } = require("discord.js")
const { NoUserError } = require("../../domain/CheckInResCode.js")

const CheckInCmd = () => {
    return new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
}

const execute = async (interaction) => {
    const hoyoRepository = require("../../data/HoyolabRepository.js")

    hoyoRepository.scheduleCheckIn(
        "",
        {
            onSuccess: result => sendCheckInMessage(result, interaction),
            onFailed: error => handleError(error, interaction)
        }
    )

}

const handleError = async (error, interaction) => {

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

module.exports = {
    data: CheckInCmd(),
    execute: execute
}

function sendCheckInMessage(result, interaction) {
    let message = ""
    if (result.retcode < 0)
        message = result.message
    else 
        message = "Sukses check in ya, traveler sayang"

    interaction.channel.send(message)
}