const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('лох')
        .setDescription('проявляет свои экстрасенсорные способности'),
    async execute(interaction) {
        await interaction.member.roles.add("1205915720882462740");
        await interaction.member.timeout(60 * 1000, 'Потому что ты лох ёпта');
        await interaction.reply(`Ты лох на ${50 + Math.round(Math.random() * 50)}%`);
    },
};