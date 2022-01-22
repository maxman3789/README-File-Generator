// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let badge;
    switch (data.license) {
      case "MIT":
        badge =
          "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache":
        badge =
          "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "BSD3":
        badge =
          "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "GPL":
        badge =
          "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;

      default:
        throw new Error(`Invalid license ${license}`);
    }


    return `${badge}
# ${data.title}<span id="title"></span>
## Description
${data.description}<span id="description"></span>
## Installation Instructions
${data.installation}<span id="installation"></span>
## Usage Information
${data.usage}<span id="usage"></span>
## Contributors
${data.contributing}<span id="contributing"></span>
## Tests
${data.tests}<span id="tests"></span>
## Questions
You can reach me on Github or through e-mail be clicking the following links:<br>
[Github](https://github.com/${data.github})<span id="github"></span><br>
[E-mail](mailto:${data.email})<span id="email"></span>
## Table Of Contents
<a href="#title">Title</a><br>
<a href="#description">Description</a><br>
<a href="#installation">Installation Instruction</a><br>
<a href="#usage">Usage Information</a><br>
<a href="#contributing">Contributors</a><br>
<a href="#tests">Tests</a><br>
<a href="#contact">Contact</a>
  `;

  }
  
  module.exports = generateMarkdown;
  