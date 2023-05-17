const child = require("child_process");
const inquirer = require("inquirer");
const spinner = require("ora")();
const chalk = require("chalk");
module.exports = function (type) {
  if (type === "v") {
    child.exec(
      "npm get registry --global",
      (err, data) => {
        if (!err) {
          if (data.indexOf("npmjs") === -1) {
            spinner.info("淘宝");
          } else {
            spinner.info("原始");
          }
        }
        else spinner.fail(err);
      }
    );
  } else {
    inquirer
      .prompt([
        {
          type: "list",
          name: "npm_origin",
          message: "选择镜像源?",
          choices: ["npm原始", "淘宝"],
        },
      ])
      .then((answers) => {
        if (answers.npm_origin == "npm原始") {
          child.exec(
            "npm config set registry https://registry.npmjs.org/",
            (err, data) => {
              if (!err) spinner.succeed("设置成功 ");
              else spinner.fail(err);
            }
          );
        }
        if (answers.npm_origin == "淘宝") {
          child.exec(
            "npm config set registry https://registry.npmmirror.com/",
            (err, data) => {
              if (!err) spinner.succeed("设置成功");
              else spinner.fail(err);
            }
          );
        }
      });
  }
};
