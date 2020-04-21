//require discord js
const Discord = require("discord.js");
require('dotenv').config(); 
var twss = require('twss');


async function isPossible(content){
    try{
        result=await twss.is(content);
        return result;
    }catch (error) {
        console.log('Opsie');
        
      }

}
//create new client
const client = new Discord.Client();


// Display a message once the bot has started
client.on("ready", ()=> {
    console.log(`Logged in as ${client.user.tag}!`);
});


// Check messages for a specific command
client.on("message", msg => {
    // Send back a reply when the specific command has been written
    if (isPossible(msg.content)) {
        msg.reply("That's what she said!");
    }

    else if(msg.content === "!m help"){
        msg.reply("Ehh. You know, *wink wink*")
    }
    
    // else if(msg.content === "thank the maker"){
    //     msg.reply("I WAS CREATED BY THE GREAT HARIKRISHNAN PS. HE IS AWESOME. ALL THANKS TO HIM")
    // }
    
    else if(msg.content === "who are you?"){
        msg.reply("I go by many names, but I would prefer if you called me Michael Scarn.")
    }

});

//log in with token
client.login(process.env.BOT_TOKEN);



