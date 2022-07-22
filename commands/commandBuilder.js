const { SlashCommandBuilder } = require('@discordjs/builders');
const data = require('./data');

const addPropToObject = () => {
  funcDataReturn = data.map((obj) => {
    const scb = new SlashCommandBuilder();

    return {
      ...obj,
      data: scb.setName(obj.commandName).setDescription(obj.description),
      async execute(interaction) {
        await interaction.reply(obj.reply);
      },
    };
  });

  return funcDataReturn;
};

module.exports = addPropToObject();
