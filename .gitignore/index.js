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
  console.log("Jeu actualisé en 'Manager Nova PUB'.");
  client.user.setActivity("Manager Nova PUB");
  setTimeout(function2, 5000);
}

function function2() {
  console.log("Jeu actualisé en 'Check logs'.");
  client.user.setActivity("Check logs");
  setTimeout(function3, 5000);
}

function function3() {
  console.log("Jeu actualisé en '/help | Nova'.");
  client.user.setActivity("/help | Nova");
  setTimeout(function4, 5000);
}

function function4() {
  console.log("Jeu actualisé en 'Modération bot.");
  client.user.setActivity("Modération bot");
  setTimeout(function1, 5000);
}
