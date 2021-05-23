
// TODO: Create a function to initialize app
//function init() { }

// Function call to initialize app



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
      choices: ['MIT', 'Mozilla', 'Google', 'Drucifer']
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
    //console.log(data);
    // write code between the <div> tags to output your objects data
    const readmefile = `

    # ${data.name}
    
    ## ${data.description}
    
    ${data.name} ${data.git} ${data.email} ${data.description} ${data.license} ${data.install} ${data.test} ${data.know} ${data.contribute}

    ## Your Task
    [This is *some red text*]{.red}
    
    When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions&mdash;this last part increases the likelihood that other developers will contribute to the success of the project. 
    
    You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.
        `;
    (data.name) ? console.log("You're temi") : console.log("You're not temi");
    const filename = `${data.name.toLowerCase().split(' ').join('')}.MD`;
    fs.writeFile(filename, readmefile, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })
  ;

  function init() { }

init();

