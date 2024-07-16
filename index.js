// TODO: Include packages needed for this application
import { writeFile } from 'fs';
import pkg from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

const { prompt } = pkg;

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project (step by step)?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the license for your project?',
        choices: ['MIT', 'Apache 2.0', 'GPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is your project for (usage)?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What should a user do to test functionality?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Where can the user reach you (email)?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    writeFile(fileName, data, (err) => {
        if (err) {
            console.error(`[ERROR] Error writing to file: ${err}`);
        } else {
            console.log('README file created successfully!');
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        // Use inquirer to prompt the user for input (async/await approach)
        const answers = await prompt(questions);
  
        // Generate the README content based on user answers
        const readmeContent = generateMarkdown(answers);
  
        // Write the generated content to the README file
        writeToFile('README.md', readmeContent);
  
        console.log('README file created successfully!');
    } catch (err) {
        console.error(`[ERROR] Error prompting user: ${err}`);
    }
}

// Function call to initialize app
init();
