/*
This Discord bot has the purpose of kicking MEE6 as soon as it joins.
This ignores which server MEE6 is joining and doesnt check if it has the kick permission, so give it them.
Made by Taureon#5684 (492665478687490048) in just 3 lines of code.
*/
const client = new (require('discord.js')).Client();
client.on('guildMemberAdd', member => member.id === /*MEE6 ID*/"159985870458322944" && member.kick(/*You can customize this string!*/"Getting rid of Garbage..."));
client.login("BOT TOKEN HERE");
