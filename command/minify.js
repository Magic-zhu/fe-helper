const spinner = require('ora')();
const chalk = require('chalk');
const imagemin = require('imagemin');
const imageminGifsicle = require('imagemin-gifsicle');

module.exports = function (path) {
  console.log(chalk.yellow('开始压缩'))
  imagemin([
      path
  ],{
      destination: "/Users/admin/Desktop/images/",
      plugins: [
        imageminGifsicle({
          optimizationLevel:2,
        })
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