const {Client, Intents} = require('discord.js');

class Bot
{
    constructor()
    {
        this.cDiscord = new Client({intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]});

        this.login();
    }

    login()
    {
        this.cDiscord.on('ready', () =>
        {
            console.log(this.cDiscord.user.tag);
        })

        this.cDiscord.login(process.env.TOKEN);
    }
}

const bot = new Bot();

module.exports = bot;