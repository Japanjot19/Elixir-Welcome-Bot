import {Client , GatewayIntentBits , EmbedBuilder, AttachmentBuilder, time} from 'discord.js';
import {config} from 'dotenv';

config();git

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Role Update event
client.on('guildMemberUpdate', (oldmember, newmember) =>
{
    //Check if Holder role updates to ovols
    if(!oldmember.roles.cache.has('1060559043204231188') && newmember.roles.cache.has('1060559043204231188'))
    {
         //Find Holder Channel to post Update
         const holderUpdateChannel = client.channels.cache.find(channel => channel.name === 'welcome-holder')
         console.log(oldmember)
         //welcome image
         const file = new AttachmentBuilder('./Welcome.jpg');

         //Create Embeded Message
         const embed = new EmbedBuilder()
            .setColor('#8652ff')
            .setThumbnail(oldmember.user.displayAvatarURL())
            .setTitle('Elixir City has a New Citizen  🔮')
            .setDescription(`Welcome our new holder ${oldmember.user}  to the City !\n\n **HOOT HOOT!** 🦉\n\n`)
            .setImage('attachment://Welcome.jpg')

         //Send Update
         holderUpdateChannel.send({ embeds: [embed] , files: [file] });

         //Logging here about the new holder
         const timestamp = Date.now();
         console.log(`User  ${oldmember.user.username}#${oldmember.user.discriminator} became a holder at timestamp ${timestamp}`)
    }
});

//bot login
client.login(process.env.BOT_TOKEN);