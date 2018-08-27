const Discord = require("discord.js");
const client = new Discord.Client();
client.on("message", (message) => {
if (message.content.startsWith("s!cvc")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("*** لايوجد لديك صلاحية  انشاء روم *** ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

            var prefix = "s!";
    const x4 = new Discord.Client();
    client.on('message', message => {
        if (message.content === prefix + "time") {
            if (!message.channel.guild) return message.reply('** This command only for servers **');  
var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds();
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            if (minutes < 10) {
                minutes = '0' + minutes;
            }
            var suffix = 'صباحاَ';
            if (hours >= 12) {
                suffix = 'مساء';
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }


                var Date15= new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL) 
                .setTitle("**الوقت وتاريخ**")
                .setColor('RANDOM')
                .setTimestamp()
                .addField('Time',
                "『"+ hours + ":" + minutes + "』") 
                .addField('Date',
                "『"+ Day + "-" + Month + "-" + Year + "』")

                 message.channel.sendEmbed(Date15);
        }
    });
client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='s!members')

      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| حالة اعضاء السيرفر')
      .addBlankField(true)
      .addField(':green_book:| Online',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| DND',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| Idle',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| Offline',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField(':arrow_right:| Server Members',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });
  client.login(process.env.BOT_TOKEN);
