import { CommandInteraction, Message, OmitPartialGroupDMChannel, SlashCommandBuilder } from "discord.js"
import { BaseCommand } from "./BaseCommand"
import Register from "./Register"

class CheckInCommand implements BaseCommand<void> {
    commandBuilder = () => {
        return new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
    }

    execute = async (interaction: CommandInteraction) => {
        const hoyoRepository = require("../../data/HoyolabRepository")
    
        hoyoRepository.scheduleCheckIn(
            {
                onSuccess: (result: CheckInResponse) => this.showCheckInMessage(result, interaction),
                onFailed: (error: Error) => this.handleError(error, interaction)
            }
        )
    }
    handleError = async (error: Error, interaction: CommandInteraction) => {
        switch(error) {
            case NoUserError: {
                //Show modal
                const registerModule = Register
                registerModule.execute(interaction)
            }
            default: 
                interaction.reply({
                    content: "Maaf yaa lagi error"
                })
        }
    }

    private showCheckInMessage(result: CheckInResponse, interaction: CommandInteraction) {
        let message = ""
        if (result.retcode < 0)
            message = result.message
        else 
            message = "Sukses check in ya, traveler sayang"
    
        interaction.reply({
            content: message
        })
    }
}

/**
 * 1. Check if user/s exist or not
 * 2. prompt initial registration of first user
 * 3. schedule a checkin 
 */
export default new CheckInCommand()
