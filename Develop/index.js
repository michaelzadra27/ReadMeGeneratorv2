



//grabbing inquirer to ask the questions
const inquirer = require('inquirer');
const fs = require('fs');
var info = []
inquirer
  .prompt([
    
    {
      type: 'input',
      name: 'git',
      message: 'What is your github',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email',
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },

    {
      type: 'input',
      name: 'description',
      message: 'Please give a description of your project',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What kind of license should your project have?',
      choices: ['MIT', 'Mozilla', 'GNU GPL',]
    },
    {
      type: 'input',
      name: 'install',
      message: 'What should be run to install the dependencies?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What command should be run to run tests?',
    },

    {
      type: 'input',
      name: 'know',
      message: 'What does the user need to now about this repo?',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'What does the user need to know about contributing to the repo?',
    },
  ])
  .then((data) => {
    info.push(data)
    for (const index of info) {
    }

    //Checking for what was selected for the license and applying the corresponding badge
    if (data.license === 'Mozilla Public License 2.0') {
      data.License = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  if (data.license === 'GNU GPL v3') {
      data.License = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else {
      data.license = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
    //console.log(data);
    // write code between the <div> tags to output your objects data
    const readmefile = 
`# ${data.name}

### ${data.description}
    
## Table of Contents
    
  *   [Installation](#Installation)
  *   [Usage](#Usage)
  *   [License](#License)
  *   [Contributing](#Contributing)
  *   [Tests](#Tests)
  *   [Questions](#Questions)
    
### Installation
    
${data.install}
    
### Usage
    
${data.know}
    
### License
    
${data.license}
    
### Contributing
    
${data.contribute}
    
### Tests
    
${data.test}
    
### Questions
    
If you have any questions please visit my GitHub profile https://github.com/${data.git} or shoot me an email at ${data.email}`;
    //Checking the filename and making sure its converted to lowercase without spaces, also console logging success or error    

    (data.name) ? console.log("You've created a Readme!") : console.log("Error, try again");
    const filename = `${data.name.toLowerCase().split(' ').join('')}.MD`;
    fs.writeFile(filename, readmefile, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })
  ;

  function init() { }

init();

