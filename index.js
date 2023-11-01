const DC = require("discord.js") ;
const Ayaka = require("./ayaka.js") ;

const configJson = JSON.stringify(require("./config/config.json")) ;
const discordToken = JSON.parse(configJson) ;

const client = new DC.Client({ intents: [DC.GatewayIntentBits.Guilds] }) 

const ayaka = new Ayaka();

client.on("ready", () => ayaka.onReady(client)) ;
client.on("interactionCreate", ayaka.reply ) ;

console.log("Logging in...") ;
client.login(discordToken["ayakaDiscord"]) ;