const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY1BzaG04UXFOaGoxdG00NG1ISTc0TlZiOEYvVy9KQ282NzFzZlErdG1tND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUjVJTlg3VHp1L3M4V1pOcWdWNTVCeE15eXA4Vm9MQ1ZocDBhdEpEQUt6RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRWN2RXlBZC96SGZaL283YzBqQWJxSUJURjZrRWYxV2dRRVQvOUMwZzBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWQVg1WnpiYlp6UXJRM05xLzRyRk0xTFZwZXBuVmRZTHdVWWdPb09RUkV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNKd2ozREc4TGFBaXVLNDV6UTJoSjB3TCsvTEM1OUZsSi9za1NkMVFkVzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml3VGRWNDFYSjVOZk0vOUVoalZmMnAvL3pBSmFHTHpNM1UzdW1vNlAwVWc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlB5TXhsMTd6RVBLelo0SHAySitJaW92bkYrL0Q4czNKS1NRZmJiL3puWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmovbVU5QlB2K0JBWmRPNUZyVkpWRjZTVmxhV0V6eXFhbXo2bW9BMXhCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5uRFgwT0FKZ2lpcXo2RE5SZHJJWks4TmtsbjZ2aHp6RWNQZGNkMzhwYWxtTmZ2VlRWZkF2MWNuZGltMG9qRHBpNnhHQXpuWGxINmU4Y3A2ZjNnVkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NCwiYWR2U2VjcmV0S2V5IjoiTlBIdG1HSTRhWnlPemxaZEFXVDFXb0lwM3h2T0RrRUxpL0ROMDg3SlVzMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiI1MDkzNDk2MDMzMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwM0I3RUUyMzgxNkQzNTE3NUNBRjgwMEMwOUUyQUY3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI2NTQ3NDIzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJjV1FORG9oNVFjdWF3NklwZUdYMFBRIiwicGhvbmVJZCI6ImY3N2Y5M2ZiLTU4ZTMtNGY5OC05ZGUxLTVlODEyMmFjNmJiNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJER3lQOGRxbSswVTdGaSt3MzBiUmQ3TlNlK0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTHdhMFZNNU1DL3BvTG9LamtmZTNrdUhjQWt3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkYySzc1WDJWIiwibWUiOnsiaWQiOiI1MDkzNDk2MDMzMToyOUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVMvMG9jQ0VMMkxwTGNHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiSGN1VnhGV3dLVUZ5K1B4MVFPQTIya2Uwb0RpNWdldy9UQk8zU1pxbHB6ND0iLCJhY2NvdW50U2lnbmF0dXJlIjoicXZ6Q2VoMVg5aDg1dk9PemJQeHFiL3hidXh5ekNXL1EwTVJTcXNRMFh4S2MwcXA4UXMxelM5b3IxdHdvMmxWSTRNREVzb0pTYi9MUm9JR3lzRWplRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IlYxU1RXalFFclVMbmVaRG5rZXhYdnRFb0xBZWVxY0ZSZEhvVkVZUDRBcFB2OE1QQXdVV25tZi9BQUg3S2R5VSsyWVQrd3F2eEdEeG4xcVpjWTdNekNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiNTA5MzQ5NjAzMzE6MjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUjNMbGNSVnNDbEJjdmo4ZFVEZ050cEh0S0E0dVlIc1Awd1R0MG1hcGFjKyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNjU0NzQwMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDMnAifQ==' : process.env.SESSION_ID,
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
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
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
