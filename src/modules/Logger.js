/* eslint-disable no-unused-vars */
import { bgMagenta, bgBlue, bgRed, bgHex } from "chalk";
import moment from "moment";
function invoke(client) {
	class Logger{
		log = (content, type = "LOG", colour = bgMagenta) => {
			const timestamp = `[${moment().tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm")}]:`;
			const message = `${timestamp} ${colour(type.toUpperCase())} ${content} `;
			const discordMessage = `${timestamp} ${(type.toUpperCase())} ${content} `; // If you want to post it in a channel or something
            
			return console.log(message);
		};
        
	}
	client.log = Logger.log;
	client.ready = (content) => Logger.log(content, "READY", bgBlue);
	client.error = (content) => Logger.log(content, "ERROR", bgRed);
	client.warn = (content) => Logger.log(content, "WARN", bgBlue);
	client.cmd = (content) => Logger.log(content, "CMD", bgHex("#eb5a00"));
	Logger.log("Logger has sucessfully loaded.");
	return Logger;
}
export default invoke;