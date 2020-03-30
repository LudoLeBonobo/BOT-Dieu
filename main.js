const { Client } = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Client({ disableEveryone: true });

client.on("ready", () => {
  console.log("Ready pour niquer des mères !");
});

client.on("message", msg => {
  if (msg.content.startsWith(`${PREFIX}ping`)) msg.channel.send("pong");
  if (msg.content.startsWith(`${PREFIX}pong`)) msg.channel.send("ping");
});

client.login(TOKEN);

