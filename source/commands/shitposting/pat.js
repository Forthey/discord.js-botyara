const { SlashCommandBuilder } = require('discord.js');
const getPetGif = require("pet-pet-gif");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pat')
        .setDescription('Прояви свою безграничную любовь')
        .addUserOption(option =>
            option
                .setName('user')
                .setDescription('кому проявить свою безграничную любовь')
                .setRequired(true)),
    async execute(interaction) {
        const user = interaction.options.getUser('user');
        const animatedGif = await getPetGif(user.avatarURL());
        await interaction.reply(animatedGif);
    },
}