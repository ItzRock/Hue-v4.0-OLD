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
const { Client, Intents } = require("discord.js");
const client = new Client({
	intents: [Intents.FLAGS.GUILDS],
	// Parse @everyone and role mentions incase of something goes wrong.
	allowedMentions: {
		parse: ["everyone", "roles"]
	}
});