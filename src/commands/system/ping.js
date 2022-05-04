/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const filename = require("path").basename(__filename).split(".")[0];
const category = __dirname.split(String.fromCharCode(92))[__dirname.split(String.fromCharCode(92)).length - 1].split("/")[__dirname.split("/").length - 1];
/**
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Message} message 
 * @param {import("discord.js")} Discord 
 */
const invoke = async (Client, Message, args, userPermissions, userLevel, Discord) =>{

};
module.exports = (Client) => {
	const details = {
		name: filename,
		category: category,
		aliases: [],
		desciption: undefined,
		usage: `${filename} <required> [optional]`
	};
	const config = {
		guildOnly: false,
		premium: false,
		disableable: true,
		enabled: true
	};
	return new Client.Command(invoke, details, config);
};