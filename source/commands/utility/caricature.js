const { SlashCommandBuilder, MessageAttachment } = require('discord.js');
const url = 'https://www.anekdot.ru/random/caricatures/';
const jsdom = require("jsdom");

async function parseCaricature() {
    let response = await fetch(url);
    if (response.status === 200) {
        let template = await response.text();
        const dom = new jsdom.JSDOM(template);
        const caricatures = dom.window.document.querySelectorAll(".text img");
        if (caricatures.length < 1) {
            return "Сегодня без карикатур";
        }
        const caricatureSrc = caricatures[Math.round(Math.random() * caricatures.length)].src;
        return {files: [{attachment: caricatureSrc}]};
    } else if (response.status === 404) {
        console.log('Not Found')
        ;
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('карикатура')
        .setDescription('только 10/10 ржака'),
    async execute(interaction) {
        await interaction.reply(await parseCaricature());
    },
};