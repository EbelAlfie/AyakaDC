const {Client, GatewayIntentBits, Events} = require("discord.js") ;
const Ayaka = require("./Soul.js") ;
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
client.on(Events.MessageCreate, interaction => ayaka.reply(interaction)) ;

console.log("Logging in...") ;
client.login(ayakaDiscord) ;