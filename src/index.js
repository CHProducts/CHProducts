const Discord = require('discord.js');

const client = new Discord.Client({ intents: ['MessageContent', 'Guilds', 'GuildMembers', 'GuildMessages'] });

require('dotenv').config();

client.on('ready', () => {
    client.user.setActivity('CatHouse Productsで生活中', { type: Discord.ActivityType.Custom });
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async (member) => {
    if (member.guild.id !== '1058664724801257612') return;
    const embed = new Discord.EmbedBuilder()
        .setTitle('Welcome to CatHouse Products!')
        .setDescription(`CatHouse Productsへようこそ, ${member.user}!\nまずは <#1058665600517410886> を読んでください！\n\nWelcome to CatHouse Products, ${member.user}!\nPlease read <#1058665600517410886> first!`)
        .setColor('#3CB371')
        .setThumbnail(member.user.displayAvatarURL())
        .setTimestamp()
        .setFooter({ text: 'CatHouse Products', iconURL: client.user.displayAvatarURL() });
    const channel = await member.guild.channels.fetch('1160545808811315200');
    channel.send({ embeds: [embed] });
});

client.on('messageCreate', async (message) => {
    if (message.author.bot || message.author.id !== '895050958441160734') return;
    if (message.content === 'chp!test') {
        const member = message.member;
        const embed = new Discord.EmbedBuilder()
            .setTitle('Welcome to CatHouse Products!')
            .setDescription(`CatHouse Productsへようこそ, ${member.user}!\nまずは <#1058665600517410886> を読んでください！\n\nWelcome to CatHouse Products, ${member.user}!\nPlease read <#1058665600517410886> first!`)
            .setColor('#3CB371')
            .setThumbnail(member.user.displayAvatarURL())
            .setTimestamp()
            .setFooter({ text: 'CatHouse Products', iconURL: client.user.displayAvatarURL() });
        const channel = await member.guild.channels.fetch('1160545808811315200');
        channel.send({ embeds: [embed] });
    }
})

client.login(process.env.TOKEN);
