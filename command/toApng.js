const spinner = require('ora')();
const chalk = require('chalk');
const imagemin = require('imagemin');
const toApng = require('gif-to-apng');

module.exports = function (path) {
  console.log(chalk.yellow('开始'))
  spinner.start();
  toApng(path).then((res) => {
    spinner.stop();
    console.log(chalk.green('成功'))
  }).catch(err => {
    spinner.stop();
    console.log(err)
    console.log(chalk.red('失败'))
  })
  imagemin([
      path
  ],{
      destination: "/Users/admin/Desktop/images/",
      plugins: [
        imageminGif2webp({quality:50})
      ]
    }).then((res) => {
      spinner.stop();
      console.log(chalk.green('成功'))        
  }).catch(err => { 
      spinner.stop();
      console.log(err)
      console.log(chalk.red('失败')) 
  })
}