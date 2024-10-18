import { SlashCommandBuilder } from "discord.js"
import { NoUserError } from "../../domain/CheckInResCode.js"
import BaseCommand from "../models/BaseCommand.js"
import { hoyoRepository } from "../../data/HoyolabRepository.js"
import * as register from "./Register.js"
import { TimeSpinner } from "../components/selection.js"

class CheckInCommand extends BaseCommand {
    data = new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")
        
    async execute(interaction) {
        if (hoyoRepository.noUserExist()) 
            this.handleError(NoUserError, interaction)
        else    
            this.#promptSelectTime(interaction)
    }

    async handleError(error, interaction) {
        switch(error) {
            case NoUserError: {
                //Show modal
                await register.command.execute(interaction)
            }
            default: 
                interaction.reply('Maaf yaa lagi error')
        }
    }

    #promptSelectTime(interaction) {
        const time = new TimeSpinner()
        interaction.reply({
            components: [time.createComponent()]
        })
    }

    onTimeSelect(time) {
        hoyoRepository.scheduleCheckIn(
            time,
            {
                onSuccess: result => this.sendCheckInMessage(result, interaction),
                onFailed: error => this.handleError(error, interaction)
            }
        )
    }
    
    sendCheckInMessage(result, interaction) {
        let message = ""
        if (result.retcode != ResponseSuccess)
            message = result.message
        else 
            message = "Sukses check in ya, traveler"
    
        interaction.channel.send(message)
    }
}

export const command = new CheckInCommand()