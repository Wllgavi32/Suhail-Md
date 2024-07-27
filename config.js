const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_01_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA2MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OCxcbiAgICAgICAgODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMjQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTQsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQyLFxuICAgICAgICA0NixcbiAgICAgICAgMTY5LFxuICAgICAgICAxODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MixcbiAgICAgICAgOTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTUzLFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA4MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM1LFxuICAgICAgICA3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MyxcbiAgICAgICAgMTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTksXG4gICAgICAgIDk3LFxuICAgICAgICAxODcsXG4gICAgICAgIDM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyLFxuICAgICAgICAxNjksXG4gICAgICAgIDY5LFxuICAgICAgICAyNixcbiAgICAgICAgMzksXG4gICAgICAgIDIzLFxuICAgICAgICA4MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3LFxuICAgICAgICA1MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMsXG4gICAgICAgIDI3LFxuICAgICAgICA1NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODIsXG4gICAgICAgIDI5LFxuICAgICAgICAxLFxuICAgICAgICA2NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxODEsXG4gICAgICAgIDE2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNjksXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjMsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMjZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMzdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDc2LFxuICAgICAgICAxOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDkxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMixcbiAgICAgICAgMTMwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYXlKM3J1YURzMytlbzRqNWdaU2tXY213Mi9KV0luOHc2THBNbktHLzhtdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiY2ktOEdHT1NRSkM2czQ2a2lpTk5Nd1wiLFxuICBcInBob25lSWRcIjogXCJmNWNkM2UwMi1hOTBhLTQ1NTgtOTNiMC1kZjcyYWEzYTEyNjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAyMjcsXG4gICAgICAyMDcsXG4gICAgICA5NyxcbiAgICAgIDE2NSxcbiAgICAgIDE4NSxcbiAgICAgIDEyNSxcbiAgICAgIDIwMyxcbiAgICAgIDIzNixcbiAgICAgIDE2NCxcbiAgICAgIDY1LFxuICAgICAgODYsXG4gICAgICAxODMsXG4gICAgICAxMzQsXG4gICAgICAxMDAsXG4gICAgICA3MyxcbiAgICAgIDQwLFxuICAgICAgODksXG4gICAgICA4LFxuICAgICAgMTUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4MixcbiAgICAgIDU4LFxuICAgICAgMjM5LFxuICAgICAgMTY2LFxuICAgICAgMTI3LFxuICAgICAgMTcsXG4gICAgICAxODEsXG4gICAgICA3OSxcbiAgICAgIDEzNSxcbiAgICAgIDEwMSxcbiAgICAgIDQwLFxuICAgICAgMjA0LFxuICAgICAgMjM2LFxuICAgICAgMTI3LFxuICAgICAgMjgsXG4gICAgICAxMTEsXG4gICAgICAxODMsXG4gICAgICA3NSxcbiAgICAgIDIyOSxcbiAgICAgIDFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMU1CWjFRNktcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1MjY4NTYyNTM4NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkDCuUZBUUlJUiBQT0kg2a3NnFwiLFxuICAgIFwibGlkXCI6IFwiNzIwMzU3MjgzOTY0NTI6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS0tvNU5FQ0VMN2NsYlVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrLzQ4TFBGWFJ0ZE1OTWVIQ1dXQ3M4OXhwemN6UkdJMm5QNWkzbVQ0N2wwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkZicElKY1BleVBGODRNSWxpTG5PMVIvd3N1OUlXcWxZSTdOamt6MFgxa25ZSmRpS2lybFQvL09FOWIySUFoaEVEcTJuUmxrMGJNdnIwcWdtVG5QTUNnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImIwVVNIRER1R0c5UVN5RStieUlyeFpCbmFTeVR6ZTZxa1ZMUnlvbnlmYmkyTlNucmszUWcvaEFhOXprNFVkYWt6N3V6bDdyWVpuYXQ2ei80LzBWQWhRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1MjY4NTYyNTM4NToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjExNzY5NyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxjZlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTGNmLmpzb24iOiAie1wia2V5RGF0YVwiOlwibHh4MlRzK1ZPYm1GOE52dk1LZVMwSExpUWRqZDJaTjluMnNDSitVY1VNVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3MDgzODM3NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
