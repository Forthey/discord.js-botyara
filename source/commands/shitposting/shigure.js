const { SlashCommandBuilder, MessageAttachment } = require('discord.js');
const imageSrc = 'images/shigure-ui-dance.gif';

module.exports = {
    data: new SlashCommandBuilder()
        .setName('шигуре')
        .setDescription('watch my 9mm go BANG'),
    async execute(interaction) {
        await interaction.reply({files: [{attachment: imageSrc}]});
    },
};