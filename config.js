//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347026742398";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU5iVWJlZ3NXUllQUGhzZEt0VDRYUTllOWNMMnZueTI4akJwT2VMNEIzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGN2a2oxTFJVaW93V3B2dm9JUkRoZk94OGdyUXVwNkluSzZ2bXM3ZG0xZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUGdpQUhRWUdzWFNUbEt3QjRLMDNqMDB4eTFBQUdNNGZ6MmJ4Ulk1U2xjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzcDFDZVIxdmx6V3M5Q042Z3RTYk9hOVoxaHJZN3NCTGVkVEtwb2R1RjNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVCOVhDVDVOZlU1Y1ZkWGtHYm9DVUxtWkExM1FhUUhwZmJJUGN0Y0dTblk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ1ek00YW9rRU1aYS9RNHVJZ1k0dkZ1N0F3NURhakd3UDYxeEgzZFh1WFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1BTWTU0S0pOYUozdGhYeHNmZTdNUDFnTjhoVTQrWTBxR2paMTVKLy9raz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUzcvUVh5Z05CVVQxN3lNNVRsRWh3Q2xoWm9xYmFFRzZiSDFuWUg2WGR4az0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ2NjNkT25hcnRHZ1R1c3lNYWdMQUxOU0FyU2ZWSGkxK0IxQkNDQ2trOVFPWDJyUUVlaEdaQi9xVklVQWEzVVRYaFlJeWtuZ1JvWmlKcUh1aG4yVml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IjFKZ1EyNWhaUWluMmQzbExvaXZmQWhuMVlMSnVLdmM5cDNwWFlLTFpJazA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAyNjc0MjM5OEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBQzkxMEIyNEFBM0Q0ODI2QTU3RkY0RjA5RkI4RDU5QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTM2MzgwfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJMWWdzbUwtLVRxcXF2cHNiVk9QekhnIiwicGhvbmVJZCI6IjM4MzE3YjJhLWVlMmEtNDY0Ni1hNGFmLTM1NTA4MjIyNjEyYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjOGduYnEwY2F4UHE2eXlwNWxpVU9TSm1kYU09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVStsNlU0cGV0UHJtMmk5cUhkWnlhN1dpZnR3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjM0QUtBUE0zIiwibWUiOnsiaWQiOiIyMzQ3MDI2NzQyMzk4OjIzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJUGxoZUVHRU9xdzVyWUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI1UERkZzNHWWlLRXRXNVZRa0NaL2l1Ykd2UC9hTXFWUkxoek1CTGp4NzN3PSIsImFjY291bnRTaWduYXR1cmUiOiIxVVZKeUZ6bmVodVNFMXlzeityNURVdDVIUXp4YXRhZ3lxUDFhZ0xIRjcwenlldXdXamg4SUxCL0htdU5PR0k2V0JKSjFFdnFJWEJOVDhkdC9OSVFBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiRVN5NTg2UGdOSkpPOEFubTVkYk9HVEl2V01Sd0pNMzVIWlh5V0pBcDJYZ2RqeWNPR2VPKy8yN0RzeVJCWXUwblhDekFDZklxc3BvRGdndTNtMUJ1alE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDI2NzQyMzk4OjIzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVUdzNZTnhtSWloTFZ1VlVKQW1mNHJteHJ6LzJqS2xVUzRjekFTNDhlOTgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU1MzYzNzUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjUyIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
