const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('pogi')
    .setDescription('Sino ang pogi?'),
  async execute(interaction) {
    await interaction.reply('Elventh pogi!');
  },
};
