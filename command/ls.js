const data = require("../data/db.json");
const chalk = require('chalk')
module.exports = function () {
    data.forEach((item, index) => {
        console.log(" 👍", chalk.green(index), " ", chalk.yellow(item),)
    })
};