const checkIn = require("../data/api/CheckIn2.js");

class Soul {
    constructor() {
        const Brain = require("./CharacterAi.js")  ;
        this.brain = new Brain() ;
    }

    onReady(client) {
        console.log(`Logged in as ${client.user.tag}`) ;
        //log in to character ai
        this.brain.bringToLive() ;
    }

    checkIn1 = require("../data/api/CheckIn.js")
    checkIn2 = require("../data/api/CheckIn2.js")
    async reply(interaction) {
        //Reply based on character ai as brain
        if (interaction.author.bot) return 

        console.log(`${interaction.content}`) 
        console.log(interaction.content === 'checkin1') 
        
        if (interaction.content == "checkin1") {
            let response = await this.checkIn1()
            interaction.channel.send(response)
            return 
        }
            
        if (interaction.content == "checkin2") {
            let response = await this.checkIn2()
            interaction.channel.send(response)
            return 
        }
            
        await interaction.channel.send("Hello") ;
        //await this.brain.goTo() ;
    }

    showSpinner(data) {
        const row = new MessageActionRow()
			.addComponents(
				new MessageSelectMenu()
					.setCustomId(id)
					.setPlaceholder(defaultValue)
					.addOptions([
						{
							label: 'Select me',
							description: 'This is a description',
							value: 'first_option',
						},
						{
							label: 'You can select me too',
							description: 'This is also a description',
							value: 'second_option',
						},
					]),
			);
    }
}

module.exports = Soul ;