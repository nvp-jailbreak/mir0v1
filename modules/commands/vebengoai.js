const fs = require("fs");
module.exports.config = {
	name: "Vẻ bề ngoài",
    version: "1.0.5",
	hasPermssion: 0,
	credits: "Module By NVP", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: "vẻ bề ngoài quang trong lắm hả",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Xấu")==0 || (event.body.indexOf("xấu")==0)) {
		var msg = {
				body: "vẻ bề ngoài quan trọng đến thế à?",
				attachment: fs.createReadStream(__dirname + `/noprefix/vebengoai.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}