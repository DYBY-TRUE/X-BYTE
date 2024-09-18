const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0dPOG51Q1JnR1NhZ2FQcG5YTHB1TFNEdVNVZTgra3k3MkJQOVFlVnVYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0k1dnRTOEZUa0tRa1k2YjZqSlJUc2FBMTlILzlMamVRdlJKVW83eEd5ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSklCSlpDU2hvK1FEZEVva1BQbDZhY1EwMUpDWDM4RS9uMVlGWWxGZ1ZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVYUJvZ3VYdDBhVnlaaEZTeFcybkFrd08yQTlWUVNvOVJsMlo1bmVkWFY0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFBYjh3eHZsQzVYd1Q3UEdjS0xFY2FVWUE4U3R3SmFBb251MlZsVEtmVnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1JcURNamhZb0krQ1RxWkNrQW1YUldlRDVGWEpzUkJ2RVN6cnNEdHFmVkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUVsVGhkc0JGM2FTc01tbVc3NkE2OGhIbzJSZlpzL2c2T1VMTVR2RGszVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYjlnZVpWRDZtSHpIMXZDMmZabGVTTkFIbEU1MEZOdkFpMEN4ZW42VHhnbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldOZ2hORWhwaXZhNTNJaklhaEZiTmxPMldvdysxU2FRVm1xUnJpQjBJQTZ1K0hMcU1YSGljLzMvaXVteDZ5c1IvbGRuVTNkU3dTc21HZnlZS1NZTmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IitkK3hXZkpmdjlLK0pFZEk0U25JMjc1SU8wRWpKLytGVHViYWQ1b1JoUUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImhKcGxteFU1VFd1WDcxNDBtZXFsOFEiLCJwaG9uZUlkIjoiYWQ5YmZhYzgtMzIxMC00NjM1LThkMWItMjIzMmFkYzUwMzNhIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE3cWM1KzBHTUR2QWNxNFh4YlM5dkFBRmZjRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SGxyLzV2TmNQOXEyK1N5TEVQckJWVGs4SGM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNFdSWURLMjQiLCJtZSI6eyJpZCI6IjUwOTM0OTYwMzMxOjM1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNUy8wb2NDRU95WHJMY0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJIY3VWeEZXd0tVRnkrUHgxUU9BMjJrZTBvRGk1Z2V3L1RCTzNTWnFscHo0PSIsImFjY291bnRTaWduYXR1cmUiOiI2UkNsZ0NOQXlFdHU3RmRmT2IrQldsSVo3UG92VXpoNTliNDlRZDl5WGFRTW5MZUU1Z2tIRjFxRmVmTkVFd0ljVmw4eXE0aUFpN0lPT0UwZlZEQkNDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiR0pScExyNjdscCtQR09GYmRUeklBUVFsUStYekN2Q2x1amRxUysxa1AwVmJOSEVTT0dpRXdHODNWOEN5RWNOdGhVTWpTWlJhbDZaSzFVRkRZaTZNanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI1MDkzNDk2MDMzMTozNUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSM0xsY1JWc0NsQmN2ajhkVURnTnRwSHRLQTR1WUhzUDB3VHQwbWFwYWMrIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NjgwMDU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUMycCJ9' : process.env.SESSION_ID,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '50934960331' : process.env.OWNER_NUMBER,   
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'false' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || true  ,
PREFIX: process.env.PREFIX || '.' ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9' : process.env.POSTGRESQL_URL,
MAX_SIZE: 500, 
ALIVE:  process.env.ALIVE  || ''  ,
FOOTER: process.env.FOOTER=== undefined ? '> Created by Hamza': process.env.FOOTER,
OWNER_REACT:  process.env.OWNER_REACT  || true  ,
ADMIN_EVENT:  process.env.ADMIN_EVENT  || true  ,   
AUTO_BLOCK:  process.env.AUTO_BLOCK  || false  ,
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || true  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
READ_CMD_ONLY:  process.env.READ_CMD_ONLY  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,   
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'private' ,
ANTI_LINK: process.env.ANTI_LINK || true  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
AI_CHATBOT: process.env.AI_CHATBOT || false  ,
AI_IMAGE: process.env.AI_IMAGE || false  ,
MATHS_AI: process.env.MATHS_AI || false  ,
WELCOME: process.env.WELCOME || false  ,  
HEROKU_API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
HEROKU_APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME, 
LOGO: process.env.LOGO || `https://raw.githubusercontent.com/HyHamza/HyHamza/main/Images/XByte-logo.png` ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
// BLOCK_COUNTRY_PREFIX : process.env.BLOCK_COUNTRY_PREFIX || "1",
BOT_DELETE_TIME : process.env.BOT_DELETE_TIME || '7',
SECONDS_MINUTES_DAYS : process.env.SECONDS_MINUTES_DAYS || "days",
DELETEMSGSENDTO : process.env.DELETEMSGSENDTO === undefined ? '' : process.env.DELETEMSGSENDTO,
  
};
