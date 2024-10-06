export function isModalError(value, interaction) {
    if (value === undefined) {
        interaction.reply({content : `${value} kamu tidak lengkap`})
        return true
    }
    return false
}