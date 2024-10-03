const ChatInputHandler = async (interaction) => {
    const command = interaction.client.commands.get(interaction.commandName);

    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }

    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
}

const ModalSubmitHandler = async (interaction) => {
    console.log(interaction)

    let email = interaction.fields.fields.get("email")
    if (isModalError(email.value, interaction)) return 
    let password = interaction.fields.fields.get("password")
    if (isModalError(password.value, interaction)) return 
    //TODO error handling


    
    console.log("PINGG")
}

module.exports = { 
    ChatInputHandler,
    ModalSubmitHandler
}


function isModalError(value, interaction) {
    if (value === undefined) {
        interaction.reply({content : `${value} kamu tidak lengkap`})
        return true
    }
    return false
}