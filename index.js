const {Client, GatewayIntentBits, Events} = require("discord.js") ;
const Ayaka = require("./ayaka.js") ;
const { ayakaDiscord } = require("./config/config.json") ;

const client = new Client({ intents: [GatewayIntentBits.Guilds] }) 
const ayaka = new Ayaka();

client.once(Events.ClientReady, () => ayaka.onReady(client)) ;
client.on(Events.InteractionCreate, ayaka.reply) ;

console.log("Logging in...") ;
client.login(ayakaDiscord) ;