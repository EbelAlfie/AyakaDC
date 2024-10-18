import { ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder } from "discord.js";
import { Times } from "../models/Times.js";
import { BaseComponent } from "../models/BaseComponent.js";

export class TimeSpinner extends BaseComponent {
	static componentId = "scheduleSelect"

	createComponent() {
		const selection = new StringSelectMenuBuilder()
			.setCustomId(TimeSpinner.componentId)
			.setPlaceholder("Select your schedule")
			.addOptions(this.options());
    	const row = new ActionRowBuilder()
			.addComponents(selection)
		return row
	}

	options() {
		return Times.map(item => {
			return new StringSelectMenuOptionBuilder()
				.setLabel(item.label)
				.setDescription("O'clock")
				.setValue(item.value)
		})
	}
}