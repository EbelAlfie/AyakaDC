const {Client, GatewayIntentBits, Events } = require("discord.js") ;
const Ayaka = require("./presentation/Soul.js") ;
const { ayakaDiscord } = 
    require("./config/config.json") ;

const client = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessageTyping,
] }) 
const ayaka = new Ayaka();

client.once(Events.ClientReady, () => ayaka.onReady(client)) ;

client.on(Events.MessageCreate, interaction => {
    ayaka.reply(interaction)
}) ;

client.on(Events.InteractionCreate, interaction => {
    ayaka.command(interaction)
})

console.log("Logging in...") ;
client.login(ayakaDiscord) ;