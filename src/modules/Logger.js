/* eslint-disable no-unused-vars */
import * as chalk from "chalk";
import * as moment from "moment";
function invoke(client) {
	class Logger{
		log = (content, type = "LOG", colour = chalk.bgMagenta) => {
			const timestamp = `[${moment().tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm")}]:`;
			const message = `${timestamp} ${colour(type.toUpperCase())} ${content} `;
			const discordMessage = `${timestamp} ${(type.toUpperCase())} ${content} `; // If you want to post it in a channel or something
            
			return console.log(message);
		};
        
	}
	client.log = Logger.log;
	client.ready = (content) => Logger.log(content, "READY", chalk.bgBlue);
	client.error = (content) => Logger.log(content, "ERROR", chalk.bgRed);
	client.warn = (content) => Logger.log(content, "WARN", chalk.bgBlue);
	client.cmd = (content) => Logger.log(content, "CMD", chalk.bgHex("#eb5a00"));
	Logger.log("Logger has sucessfully loaded.");
	return Logger;
}
export default invoke;