const chalk = require('chalk')
module.exports = function(tcpNumber){
    console.log(chalk.redBright('端口占用'),'lsof -i tcp:')
    console.log(chalk.redBright('杀掉进程'),'sudo kill -9 xxxxx(pid)')
    console.log(chalk.redBright('显示当前目录完成路径'),'pwd')
    console.log(chalk.redBright('新建文件夹'),'mkdir')
}