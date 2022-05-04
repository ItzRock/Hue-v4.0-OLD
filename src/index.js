/*
    Hue v4.0
    Its finally here.

    Written by Anthony Stainton.
    Github: https://github.com/ItzRock
    Discord: Anthоny#0001 (299682971374452739)

    Support Server: https://discord.gg/QwgnZ83XD3

    ----------------------

    Based off of Hue v3.0
    https://github.com/ItzRock/Hue-v3.0/
         ↳ Contributor(s) of Hue v3.0
            Anthony Stainton (https://github.com/ItzRock)
            Harry Chen (https://github.com/HarryXChen3)
            

    Contributor(s) of Hue v4.0
    Anthony Stainton (https://github.com/ItzRock)

*/
import { Client, Intents } from "discord.js";
import { config } from "dotenv";
import fs from "fs";

import log from "./modules/Logger.js";
import functions from "./handlers/functions.js";
import modules from "./handlers/modules.js";

config();
const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
	// Parse @everyone and role mentions incase of something goes wrong.
	allowedMentions: {
		parse: ["everyone", "roles"]
	}
});

// Get this ready early on.
client.log = log(client);

client.functions = functions(client);
client.modules = modules(client);

// Load our events.
const events = fs.readdirSync("./src/events");
for(const filename of events){
	const eventName = filename.split(".")[0];
	client.warn(`Loading Event: ${eventName}`);
	const event = (await import(`./events/${filename}`)).default;
	
	client.on(eventName, event.bind(null, client));
}

client.login(process.env.TOKEN);