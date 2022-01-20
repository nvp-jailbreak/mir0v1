module.exports.config = {
    name: "console",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "",
    description: "",
    commandCategory: "console",
    usages: "xem tin nhs trên console",
    cooldowns: 0,
};
module.exports.handleEvent = async function ({ api, args, Users, event, Threads, utils, client }) {
    let { messageID, threadID, senderID, mentions } = event;
    const chalk = require('chalk');
    // lấy time hiện tại nếu bạn dùng replit hay vps utc khác +7 thì dùng moment timezone 
    var time = new Date();
    const day = time.getDate();
    const date = time.getDay();
    const year = time.getFullYear();
    const ss = time.getYear();//lấy 2 số cuối của năm
    const aa = time.getHours();
    const cc = time.getMinutes();
    const dd = time.getMonth();
    const ee = time.getSeconds();
    switch (date) {
        case 0: {
            textt = "Chủ Nhật"
            break;
        }
        case 1: {
            textt = "Thứ Hai"
            break;
        }
        case 2: {
            textt = "Thứ Ba"
            break;
        }
        case 3: {
            textt = "Thứ Bốn"
            break;
        }
        case 4: {
            textt = "Thứ Năm"
            break;
        }
        case 5: {
            textt = "Thứ Sáu"
            break;
        }
        default: {
            textt = "Thứ Bảy"
        }
    }
    switch (dd) {
        case 0: {
            texttt = "Tháng 1"
            break;
        }
        case 1: {
            texttt = "Tháng 2"
            break;
        }
        case 2: {
            texttt = "Tháng 3"
            break;
        }
        case 3: {
            texttt = "Tháng 4"
            break;
        }
        case 4: {
            texttt = "Tháng 5"
            break;
        }
        case 5: {
            texttt = "Tháng 6"
            break;
        }
        case 6: {
            texttt = "Tháng 7"
            break;
        }
        case 7: {
            texttt = "Tháng 8"
            break;
        }
        case 8: {
            texttt = "Tháng 9"
            break;
        }
        case 9: {
            texttt = "Tháng 10"
            break;
        }
        case 10: {
            texttt = "Tháng 11"
            break;
        }
        default: {
            texttt = "Tháng 12"
        }
    }
    const name = await Users.getNameUser(event.senderID)
    const threadInfo = await api.getThreadInfo(event.threadID)
    const threadName = threadInfo.threadName
    const msg = event.body
    console.log(chalk.bold.hex("#00FFFF")("─🐉 NVP 🐍─ ▷") + chalk.bold.hex("#FF33CC")(`Nhóm: ${threadName}`) + chalk.bold.hex("#33CC33")(` | `) + chalk.bold.hex("#FF4500")(`ID: ${senderID}`) + chalk.bold.hex("#33CC33")(` || `) + chalk.bold.hex("#00FFFF")(`Tên: ${name}:`) + chalk.bold.hex("#FF7F50")(` || `) + chalk.bold.hex("#33CC33")(`Message: ${msg}`) + `\n` + chalk.bold.hex("#00FA9A")(`${textt} Ngày ${day} ${texttt} Năm ${year} || ${aa} giờ : ${cc} phút : ${ee} giây`));
}
module.exports.run = async function ({ api, args, Users, event, Threads, utils, client }) {
}