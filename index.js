const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")
const userQuestions = [{
    message: "Enter your GitHub username:",
    name: "username"
    
}]
inquirer
  .prompt(userQuestions)
  .then(function(answers) {
      console.log(answers);
      
    const queryUrl = `https://api.github.com/users/${answers.username}`;

    axios.get(queryUrl).then(function(res) {
      console.log(res.data);
      

      fs.writeFile("READme.md", generateMarkdown({title: "my project"}, {avatar_url: "<img src='https://avatars0.githubusercontent.com/u/62914965?v=4>'"}), function(err) {
        if (err) {
          throw err;
        }

        console.log(`wrote ReadMe`);
      });
    });
  });
