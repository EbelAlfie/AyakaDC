import { SlashCommandBuilder } from "discord.js"
import { NoUserError } from "../../domain/CheckInResCode.js"
import BaseCommand from "../models/BaseCommand.js"
import { hoyoRepository } from "../../data/HoyolabRepository.js"
import * as register from "./Register.js"

class CheckInCommand extends BaseCommand {
    data = new SlashCommandBuilder()
        .setName("checkin")
        .setDescription("Schedule a checkin to hoyolab")

    async execute(interaction) {
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
                await register.command.execute(interaction)
            }
            default: 
                interaction.reply('Maaf yaa lagi error')
        }
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