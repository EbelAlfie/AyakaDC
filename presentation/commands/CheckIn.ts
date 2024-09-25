import { CommandInteraction, Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"
import { LoginModal } from "../components/modals"

const CheckInCmd = () => {
    return new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
}

const execute = async (
    interaction: CommandInteraction
) => {
    const hoyoRepository = require("../../data/HoyolabRepository")

    hoyoRepository.scheduleCheckIn(
        {
            onSuccess: (result: CheckInResponse) => showCheckInMessage(result, interaction),
            onFailed: (error: Error) => handleError(error, interaction)
        }
    )

}

const handleError = (
    error: Error, 
    interaction: CommandInteraction
) => {

    switch(error) {
        case NoUserError: {
            //Show modal
            const modal = LoginModal()
            interaction.showModal(modal)
            interaction.awaitModalSubmit({time: 5000})
            .then(result => {
                console.log(result)
            })
        }
        default: 
            interaction.reply('Maaf yaa lagi error')
    }

}

/**
 * 1. Check if user/s exist or not
 * 2. prompt initial registration of first user
 * 3. schedule a checkin 
 */
module.exports = {
    data: CheckInCmd(),
    execute: execute
}


//Niche Functions

function showCheckInMessage(result: CheckInResponse, interaction: CommandInteraction) {
    let message = ""
    if (result.retcode < 0)
        message = result.message
    else 
        message = "Sukses check in ya, traveler sayang"

    interaction.reply(message)
}
