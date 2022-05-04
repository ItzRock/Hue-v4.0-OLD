/* eslint-disable no-unused-vars */
import chalk from "chalk";
import moment from "moment";
function invoke(client) {
	function log(content, type = "LOG", colour = chalk.bgMagenta){
		const timestamp = `[${moment().format("YYYY-MM-DD HH:mm")}]:`;
		const message = `${timestamp} ${colour(type.toUpperCase())} ${content} `;
		const discordMessage = `${timestamp} ${(type.toUpperCase())} ${content} `; // If you want to post it in a channel or something
        
		return console.log(message);
	}
	client.ready = (content) => log(content, "READY", chalk.bgBlue);
	client.error = (content) => log(content, "ERROR", chalk.bgRed);
	client.warn = (content) => log(content, "WARN", chalk.bgBlue);
	client.cmd = (content) => log(content, "CMD", chalk.bgHex("#eb5a00"));
	log("Logger has sucessfully loaded.");
	return log;
}
export default invoke;