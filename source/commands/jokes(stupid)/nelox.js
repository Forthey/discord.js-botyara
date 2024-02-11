const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('нелох')
        .setDescription('ты врешь сам себе'),
    async execute(interaction) {
        await interaction.member.roles.remove("1205915720882462740");
        await interaction.reply("Ладно ладно, только не обижайся");
    },
};