const { Client, Collection, Intents } = require('discord.js');
const { token } = require('./config.json');
const command = require('./test/commandBuilder');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

for (const com of command) {
  client.commands.set(com?.data?.name, com);
}

client.once('ready', () => {
  console.log('Ready!');
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: 'There was an error while executing this command!',
      ephemeral: true,
    });
  }
});

client.login(token);
