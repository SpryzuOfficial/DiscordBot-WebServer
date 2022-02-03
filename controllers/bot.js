const { request, response } = require("express");
const bot = require('../models/bot');

const sendToBot = async(req = request, res = response) =>
{
    const {msg, channel} = req.body;

    if(!msg || !channel) 
    {
        return res.status(400).json({msg: "Missing fields"});
    }

    try 
    {
        const ch = await bot.cDiscord.channels.fetch(channel);

        await ch.send(msg);
    } 
    catch (error) 
    {
        console.log(error);
    }
    
    res.status(200).json({msg, channel});
}

module.exports = {
    sendToBot
}