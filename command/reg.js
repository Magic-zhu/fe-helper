const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
let data
if (!fs.existsSync(path.dirname(__dirname) + "/data/db.json")) {
    data = []
} else {
    data = require(path.dirname(__dirname) + "/data/db.json");
}
module.exports = function (t) {
    data.push(t)
    fs.writeFileSync(path.join(__dirname, "../data/db.json"), JSON.stringify(data))
    console.log(chalk.greenBright("注册完成"))
};