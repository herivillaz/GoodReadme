const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const userQuestions = [{
  message: "Enter your GitHub username:",
  name: "username"
},
{
  type: "input",
  name: "title",
  message: "Title of your project: "
},
{
  type: "input",
  name: "description",
  message: "Description: "
},
{
  type: "input",
  name: "installation",
  message: "Installation: "
},
{
  type: "input",
  name: "usage",
  message: "Usage: "
},
{
  type: "list",
  name: "license",
  message: "License: ",
  choices: ["MIT", "GNU GPLv3"]
},
{
  type: "input",
  name: "contribute",
  message: "What are the requirements for contributing to this project: "
},
{
  type: "input",
  name: "test",
  message: "List of Tests: "
},
{
  type: "confirm",
  name: "includeProfilePicture",
  message: "Would you like Profile Picture to be displayed: ",
},
{
  type: "confirm",
  name: "includeEmail",
  message: "Provide Email: "
},
{
  type: "input",
  name: "email",
  message: "Email Address: ",
  when: function (res) {
    return res.includeEmail;
  }
}
]
inquirer
  .prompt(userQuestions)
  .then(function (answers) {
    console.log(answers);
    const data = {

      username: answers.username,
      title: answers.title,
      license: licenseBadge(answers.license),
      description: answers.description,
      installation: answers.installation,
      usage: answers.usage,
      contribute: answers.contribute,
      test: answers.test,
      profilePicture: profilePicture(answers.includeProfilePicture, answers.username),
      email: email(answers.includeEmail, answers.email)

  }
let data2 = generateMarkdown(data)
console.log(data2);


    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function (res) {
      console.log(res.data);

      


      fs.writeFile("READme.md", data2, function (err) {
        if (err) {
          throw err;
        }

                console.log(`wrote ReadMe`);
      });
      
    });
    
  });
  function licenseBadge(data){
    if(data === "MIT") {
        let badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        return badge;

    }
    else{
        return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    }
}

function profilePicture(data, user){
    if (data === true) {
        return `![Repo Owner Image](https://avatars.githubusercontent.com/${user}?s=100)`;
    }
    
    else {
        return `[${user}](https://github.com/${user})`;
    }

}

function email(data, email){
    if (data === true) {
        return `${email}`;
    }
    
    else {
        return "";
    }
  };
