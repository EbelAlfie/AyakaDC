import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { Times } from "../models/Times";

const options = () => {
	return Times.map(item => {
		new StringSelectMenuOptionBuilder()
			.setLabel(item.label)
			.setDescription("O'clock")
			.setValue(item.value)
	})
}

export const TimeSpinner = () => {
    const row = new StringSelectMenuBuilder()
		.setCustomId("scheduleSelect")
		.setPlaceholder("Select your schedule")
		.addOptions(options);
    return row
}