/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
import { readdir, readdirSync } from "fs";

export default async (client) => {
	client.modules = new Map();
	const modules = readdirSync("./src/modules/");
	for(const filename of modules){
		client.log(`Loading module: ${filename}`);
		if(filename != "Logger.js"){
			try {
				const module = filename.split(".")[0];
				const moduleExport = (await import(`../modules/${filename}`).default);
			} catch (error) {
				client.error(`An error has occured when trying to load module: ${filename}`);
			}
			
		} else {
			client.log("Skipping Logger.js as that's been preloaded.");
		}
	}
};