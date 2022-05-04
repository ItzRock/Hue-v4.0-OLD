/* eslint-disable no-undef */
class Command {
	constructor(invoke, details, config, data){
		this.invoke = invoke;

		this.name = details.name;
		this.aliases = details.aliases || [];
		this.description = details.description || "This is a standard command with no desciption.";
		this.category = details.category;

		this.slashCommandData = data;

		this.guildOnly = config.guildOnly;
		this.premium = config.premium || false;
		this.disableable = config.disableable || true;
		this.enabled = config.enabled || true;
	}
}
module.exports = (client) => client.Command = Command;