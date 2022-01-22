// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: import the generateMarkdown function from utils/generateMarkdown.js
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter Project Title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a Description',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide Installation Instructions',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide Usage Information',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Who is contributing?',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide Testing Results',
      },
      // John had a session going over a Switch statement and where to find Licensing
      {
        type: "list",
        message: "Choose a license to create your badge:",
        name: "license",
        choices: [
          { name: "MIT license", value: "MIT" },
          { name: "Apache License 2.0", value: "Apache" },
          { name: 'BSD 3-Clause "New" or "Revised" license', value: "BSD3" },
          { name: "GNU General Public License (GPL)", value: "GPL" },
        ],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your e-mail?',
      },
    ])
    .then((answers) => {
        
      console.log(answers);

      const filename = `${answers.title.toLowerCase().split(' ').join('')}.md`;

      const fileGenerateMarkdown = generateMarkdown(answers);
  
      fs.writeFile(filename, fileGenerateMarkdown, (err) =>
        err ? console.log(err) : console.log('Successfully!')
      );
    });

}

// Function call to initialize app
init();
