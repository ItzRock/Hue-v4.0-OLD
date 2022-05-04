/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import * as Discord from "discord.js";
import { SlashCommandBuilder } from "@discordjs/builders";

const filename = import("path").default.basename(__filename).split(".")[0];
const category = __dirname.split(String.fromCharCode(92))[__dirname.split(String.fromCharCode(92)).length - 1].split("/")[__dirname.split("/").length - 1];
const description = "Pong!";

/**
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Interaction} Interaction
 */
const invoke = async (Client, Interaction) =>{

};
module.exports = (Client) => {
	const details = {
		name: filename,
		category: category,
		aliases: [],
		description: description,
	};
	const slashCommand = new SlashCommandBuilder()
		.setName(filename)
		.setDescription(description)
		.setDefaultPermission(true); // If this is an admin command or something set this to false.

	const config = {
		guildOnly: false,
		premium: false,
		disableable: true,
		enabled: true
	};
	return new Client.Command(invoke, details, config, slashCommand);
};