const dotenv = require('dotenv');//โหลด dotenv มาใช้งาน
dotenv.config();//เรียกใช้งาน dotenv


const menu = ["กระเพราไก่", "ข้าวผัดทะเล", "ไข่เจียวหมูกรอบ", "คะน้าหมูกรอบ"]//สร้าง array ชื่อ menu มีข้อมูลเป็น 4 ตัว

const { Client, GatewayIntentBits } = require('discord.js');//โหลด discord.js มาใช้งาน
const client = new Client({ intents: [GatewayIntentBits.Guilds] });//สร้าง client ใหม่

client.on('ready', () => {//เมื่อ client พร้อมใช้งาน
  console.log(`Logged in as ${client.user.tag}!`);//แสดงข้อความใน console
});// ปิด client.on('ready')

client.on('interactionCreate', async interaction => {//เมื่อมีการส่งข้อมูลมาทาง interaction
  if (!interaction.isChatInputCommand()) return;//ถ้าข้อมูลที่ส่งมาไม่ใช่ command ให้ return ออกไป

  if (interaction.commandName === 'ping') {//ถ้า command ที่ส่งมาชื่อว่า ping
    await interaction.reply('Pong!');//ส่งข้อความกลับไปทาง interaction
  }

  if (interaction.commandName === 'random-food') {//ถ้า command ที่ส่งมาชื่อว่า random-food
    await interaction.reply(menu[Math.floor(Math.random() * menu.length)]);//ส่งข้อความกลับไปทาง interaction โดยสุ่มข้อมูลจาก array menu
  }

});

client.login(process.env.TOKEN);//เข้าสู่ระบบด้วย token ที่ได้จาก .env