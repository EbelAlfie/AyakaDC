import { StringSelectMenuBuilder } from "discord.js";

export const TimeSpinner = () => {

	

    const row = new StringSelectMenuBuilder()
		.setCustomId("scheduleSelect")
		.setPlaceholder("Select your schedule")
		.addOptions();
    return row
}