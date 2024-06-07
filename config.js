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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "09074956113";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_59_06_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgNzgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzNixcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMzYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNixcbiAgICAgICAgOSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk0LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICA0LFxuICAgICAgICA1MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU3LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NyxcbiAgICAgICAgMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA1MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyLFxuICAgICAgICA1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDg5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDMyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDY3LFxuICAgICAgICA0OSxcbiAgICAgICAgOTMsXG4gICAgICAgIDI3LFxuICAgICAgICAzMCxcbiAgICAgICAgNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDg0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNixcbiAgICAgICAgMjUwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTksXG4gICAgICAgIDk5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDU4LFxuICAgICAgICA4LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTQzLFxuICAgICAgICAyNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAzMSxcbiAgICAgICAgMTYzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzOSxcbiAgICAgICAgMjIxLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJnRDdjWnNHajZGOEdlZnBJanV1b1FFYS9FZyt2eGhqWDhVZC9VL0lYQmlzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBTWRHY00wb1FxYTR5TmM5U0hxWXJRXCIsXG4gIFwicGhvbmVJZFwiOiBcImViMTYzZDNmLWYwMjMtNDAzZi05NmI4LWRmNDU4NDllYzcxNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAyMzMsXG4gICAgICAxOSxcbiAgICAgIDIzNixcbiAgICAgIDEwLFxuICAgICAgMTQ0LFxuICAgICAgMTA3LFxuICAgICAgMTk3LFxuICAgICAgMTczLFxuICAgICAgMTMsXG4gICAgICAxNTksXG4gICAgICAxMDYsXG4gICAgICAyMTAsXG4gICAgICAyMTksXG4gICAgICAxNDMsXG4gICAgICA1LFxuICAgICAgMTg5LFxuICAgICAgMTAzLFxuICAgICAgMTksXG4gICAgICA5N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzAsXG4gICAgICA4MixcbiAgICAgIDE4NCxcbiAgICAgIDIxMixcbiAgICAgIDc5LFxuICAgICAgMjEwLFxuICAgICAgNjIsXG4gICAgICA0MCxcbiAgICAgIDI1MixcbiAgICAgIDI1MyxcbiAgICAgIDE1NyxcbiAgICAgIDY4LFxuICAgICAgODcsXG4gICAgICAzMSxcbiAgICAgIDE5MSxcbiAgICAgIDE1MixcbiAgICAgIDE0OCxcbiAgICAgIDIxNyxcbiAgICAgIDIxMSxcbiAgICAgIDIxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1S1BXRlQ0OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3NDk1NjExMzoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNDIzOTU4NjU4NzA1Njg6MUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJNeWxlcyBTaGFrZXMoK18rKVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09pK3VwNENFTjYyaWJNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZlNTK2xrZllnTW9jcVhTRlh1UE1tdThzUzYwc2EzOCt5Rzg1czRnRFYxOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJFbGhwRk8zVzVnMSs5OFc4VEt5R1gzVTZnYlR3MzFqU0lkRFduWkFZbXpndzkxaEVKOUMzT2JocGR2SGFsZnRzdGFZc0Z1Tkl3cE9RTGkrWk4vQmdEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJjVE8raWJFVE9UaWZ0RjJqSWxWSFNSYlRxZHRHVEVFbHdDRVh4eU5yZHlLNHg0dWpzbFhwYlJvRDBPWG12NGNnVGU1WjRrc1JVWmNuRXZsekU5OTFEdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDc0OTU2MTEzOjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgOTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzcyMTk1NCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdrNFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2s0Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiNk5qMVltdnYydDdGNXhXeG9oVCtVTEMzSVRvWTg4cWs0ZmE5TjlpQ3hVOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MDA3NDM3ODQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzcyMTk1OTA3MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
