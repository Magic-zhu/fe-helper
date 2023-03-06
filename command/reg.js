const data = require("../data/db.json");
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
module.exports = function (t) {
    data.push(t)
    fs.writeFileSync(path.join(__dirname, "../data/db.json"), JSON.stringify(data))
    console.log(chalk.greenBright("注册完成"))
};