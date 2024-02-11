const { SlashCommandBuilder } = require('discord.js');
const url = 'https://www.anekdot.ru/random/anekdot/';
const jsdom = require("jsdom");


async function parseAnekdot() {
    let response = await fetch(url);
    if (response.status === 200) {
        let template = await response.text();
        console.log(template.length);
        const dom = new jsdom.JSDOM(template);
        const anekdots = dom.window.document.getElementsByClassName("text");
        if (anekdots.length < 1) {
            return "Сегодня без анекдотов";
        }
        const anekdot = anekdots[Math.floor(Math.random() * anekdots.length)].textContent;
        return anekdot;
    } else if (response.status === 404) {
        console.log('Not Found');
    }
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('анекдот')
        .setDescription('только 10/10 ржака'),
    async execute(interaction) {
        await interaction.reply(await parseAnekdot());
    },
};