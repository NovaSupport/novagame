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
  console.log("Jeu actualisé en 'Logs'.");
  client.user.setActivity("Logs");
  setTimeout(function2, 9000);
}

function function2() {
  console.log("Jeu actualisé en '/help | The Last PUB'.");
  client.user.setActivity("/help | The Last PUB");
  setTimeout(function3, 9000);
}

function function3() {
  console.log("Jeu actualisé en 'Manage The Last PUB'.");
  client.user.setActivity("Manage The Last PUB");
  setTimeout(function1, 9000);
}
