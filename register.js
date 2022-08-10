const { REST, Routes } = require('discord.js');//โหลด discord.js มาใช้งาน
const dotenv = require('dotenv');//โหลด dotenv มาใช้งาน

dotenv.config();//เรียกใช้งาน dotenv


const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
  {
    name: 'random-food',
    description: 'Random food generator',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();