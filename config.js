const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="burtonbilly432@gmail.com"
global.location="Africa, Uganda."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Uganda";
global.github=proces.env.GURL ||";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || " ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "256761396309" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256761396309";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_46_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICA2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMTksXG4gICAgICAgIDI1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMixcbiAgICAgICAgMjA4LFxuICAgICAgICA3MixcbiAgICAgICAgMTgyLFxuICAgICAgICAxODIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjUsXG4gICAgICAgIDc5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTcxLFxuICAgICAgICAzLFxuICAgICAgICA5MixcbiAgICAgICAgMTA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5NixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNzksXG4gICAgICAgIDE1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3NyxcbiAgICAgICAgNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICA1MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMixcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQ2LFxuICAgICAgICA2NyxcbiAgICAgICAgMTksXG4gICAgICAgIDIxLFxuICAgICAgICAxODYsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNzMsXG4gICAgICAgIDY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDc3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyLFxuICAgICAgICAzNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDY4LFxuICAgICAgICA2OCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNTksXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTEzLFxuICAgICAgICAxODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxOTksXG4gICAgICAgIDk4LFxuICAgICAgICAzOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NixcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTksXG4gICAgICAgIDI4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMCxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJTQXZmem9uWVAxekZQeWhsZWp3T1FqL0VUVTVQbDZaREEwQjFTU0t2SUJ3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJld29pWkR4c1E3S3N2T2NyZE1waC1BXCIsXG4gIFwicGhvbmVJZFwiOiBcImFmNmEwZDNmLTg4OWEtNDU4Ny05Mjc2LTg0MTJjNmJhYzkzNVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjgsXG4gICAgICAzNSxcbiAgICAgIDIwOCxcbiAgICAgIDE0MSxcbiAgICAgIDE0NCxcbiAgICAgIDE1OSxcbiAgICAgIDEwMCxcbiAgICAgIDE4NyxcbiAgICAgIDIxLFxuICAgICAgMjM0LFxuICAgICAgMTAwLFxuICAgICAgMTMxLFxuICAgICAgMTMyLFxuICAgICAgMTE5LFxuICAgICAgMjE0LFxuICAgICAgMjQ1LFxuICAgICAgMjU0LFxuICAgICAgMTY2LFxuICAgICAgMjI5LFxuICAgICAgMjMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDIzMixcbiAgICAgIDIxMSxcbiAgICAgIDE5MixcbiAgICAgIDExNixcbiAgICAgIDE3MyxcbiAgICAgIDIxMixcbiAgICAgIDE1MCxcbiAgICAgIDExOSxcbiAgICAgIDIwOSxcbiAgICAgIDIxLFxuICAgICAgMjA5LFxuICAgICAgOSxcbiAgICAgIDE2NixcbiAgICAgIDIyNSxcbiAgICAgIDE2MCxcbiAgICAgIDE5NixcbiAgICAgIDE2NixcbiAgICAgIDIxMyxcbiAgICAgIDIyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJKU0hNS0dIV1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU2NzYxMzk2MzA5OjMzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQsyIIMOEIELMiCDFuCBGzIgg4bqMIOG1kOG1kuKBv+G1icq4XCIsXG4gICAgXCJsaWRcIjogXCIxNDMyMDczNzk4MDAyNDI6MzNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTzM3bS9NRkVKMnRnTFVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvem54MEgvejV1eTZWbjdQMk1KZ293RkQzdStiZW9sUVkzS3FZa2hybkhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImRXVmxieWQrUnhBeWJJVXJBaHhoQUpXUGZDQWtTRGZUOVpVYnFTcVpEM0czazR5eGlkT0d2TXQyU0w4NjNaTGxOMHVyMXpOMHJlNEtCbVFHRkZ4MUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRIQlhzRVpBb3J5czNoQ3c1SFRibFR1dVRFN1ZNSTZTbzZ4bzRUV3gwSGt1MkZVY2hNSFRheXlXcDJ0NkJxOHlxaGNBeUJsc3ErRzZMRkRHdGFRbkJ3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1Njc2MTM5NjMwOTozM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxNzY3NTg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRkdTXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGR1MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJSd2EyTlYwa0tTdVRwYjJkMjhHQXFOSFUwbzM1amU2TmY3Y0ZlaE1KMWZFPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1ODM4MDc5ODEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTc2NzU5MDI0N1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "babyfx",
  packname: process.env.PACK_NAME || "babyfx",
  botname : process.env.BOT_NAME  || "Fxbaby",
  ownername:process.env.OWNER_NAME|| "BABYFX",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "BABYFX"  ).toUpperCase(),



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
