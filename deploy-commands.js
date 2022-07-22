const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const command = require('./commands/commandBuilder');
const commands = [];

for (const com of command) {
  commands.push(com?.data.toJSON());
}

const rest = new REST({ version: '9' }).setToken(token);

for (const [key, value] of Object.entries(guildId)) {
  rest
    .put(Routes.applicationGuildCommands(clientId, value), {
      body: commands,
    })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
}
