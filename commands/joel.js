const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ochinchin')
    .setDescription('I love ochinchin'),
  async execute(interaction) {
    await interaction.reply('Joel loves ochinchin');
  },
};
