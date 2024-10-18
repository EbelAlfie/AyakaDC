import { StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { Times } from "../models/Times.js";

const options = () => {
	return Times.map(item => {
		return new StringSelectMenuOptionBuilder()
			.setLabel(item.label)
			.setDescription("O'clock")
			.setValue(item.value)
	})
}

export const TimeSpinner = () => {
    const selection = new StringSelectMenuBuilder()
		.setCustomId("scheduleSelect")
		.setPlaceholder("Select your schedule")
		.addOptions(options());
    return selection
}