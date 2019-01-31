const Discord = require('discord.js');

const client = new Discord.Client();

client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log("PrincipaleBotGAME est allumé !");
  client.user.setActivity("{:robot:} Je suis GamerBot");
  function1();
});

var nom = process.env.NOM;
var prefix = process.env.PREFIX;

function function1() {
  console.log("Jeu actualisé en 'Read Roblox Request'.");
  client.user.setActivity("Read Roblox Request");
  setTimeout(function2, 5000);
}

function function2() {
  console.log("Jeu actualisé en 'Logs'.");
  client.user.setActivity("Logs");
  setTimeout(function3, 5000);
}

function function3() {
  console.log("Jeu actualisé en '!help | Nova'.");
  client.user.setActivity("!help | Nova");
  setTimeout(function4, 5000);
}

function function4() {
  console.log("Jeu actualisé en '{🔨} xfirox#6001'.");
  client.user.setActivity("{🔨} xfirox#6001");
  setTimeout(function1, 5000);
}
