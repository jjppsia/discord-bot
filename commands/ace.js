const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder().setName('ace').setDescription('gay'),

  async execute(interaction) {
    await interaction.reply('Ace, gay as fuck');
  },
};
