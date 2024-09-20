import { Client, GatewayIntentBits, Events, Message, OmitPartialGroupDMChannel } from "discord.js";

//const {Client, GatewayIntentBits, Events} = require("discord.js") ;
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
client.on(Events.MessageCreate, (interaction: OmitPartialGroupDMChannel<Message<boolean>>) => {
    ayaka.reply(interaction)
}) ;

console.log("Logging in...") ;
client.login(ayakaDiscord) ;