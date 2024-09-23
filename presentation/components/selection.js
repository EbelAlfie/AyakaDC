const TimeSpinner = () => {
    const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(id)
					.setPlaceholder(defaultValue)
					.addOptions(),
			);
    return row
}

module.exports = {
    TimeSpinner
}