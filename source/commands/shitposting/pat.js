const { SlashCommandBuilder, AttachmentBuilder } = require('discord.js');
const getPetGif = require("pet-pet-gif");
const fs = require("fs");

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
        const user = await interaction.options.getUser('user');
        let url = user.avatarURL();
        url = url.substring(0, url.indexOf(".", url.length - 5)) + ".png";
        console.log(url);
        let animatedGif = await getPetGif(url);
        const patGif = new AttachmentBuilder(animatedGif);
        //await interaction.reply({ files : [patGif] });
        await interaction.reply({files: [{attachment: animatedGif}]});
    },
}