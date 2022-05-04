/* eslint-disable no-unused-vars */
export default (client) => {
	client.activeStatus = `${client.user.username} Development`;
	client.user.setActivity(client.activeStatus, {type: "PLAYING"});
	setInterval(function(){
		client.user.setActivity(client.activeStatus, {type: "PLAYING"});
	}, 3600000);
	client.ready(`Logged On As: ${client.user.tag}, | Hue v4.0 Base.`);
};