const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Importing classes files
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Importing HTML Template file
const generateHTML = require('./src/generateHTML');
const employeesHTML = require('./src/employeesHTML');

let employeeList = [];

// Question prompts for the user inputs
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is the employee\'s name?',
            name: 'name',
        },
        {
            type: 'number',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'number',
            message: 'What is your ID number?',
            name: 'id',
        },
        {
            type: 'list',
            message: 'What is your employee role?',
            name: 'role',
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            message: 'What is your office number?',
            name: 'officeNumber',
            when: function (answers) {
                return answers.role === 'Manager';
            },
            validate: function validateOfficeNumber(name) {
                return name !== '';
            },
        },
        {
            type: 'input',
            message: 'What is your GitHub user name?',
            name: 'github',
            when: function (answers) {
                return answers.role === 'Engineer';
            },
            validate: function validateGithub(name) {
                return name !== '';
            },
        },
        {
            type: 'input',
            message: 'What is your school?',
            name: 'school',
            when: function (answers) {
                return answers.role === 'Intern';
            },
            validate: function validateSchool(name) {
                return name !== '';
            },
        },
        {
            type: 'input',
            message: 'Add another employee? (yes/no)',
            name: 'confirm'
        },
    ]).then((answers) => {
        employeeList.push(answers);

        if (answers.confirm === 'yes') {
            console.log(employeeList, answers)
            promptUser();
        } else {
            let employeeAnswers = {
                manCards: '',
                engCards: '',
                intCards: '',
            };
            for (let i = 0; i < employeeList.length; i++) {
                let employees = employeesHTML(employeeList[i]);
                // string += employees;
                switch (employeeList[i].role) {
                    case 'Manager':
                        employeeAnswers.manCards += employees;
                        break;
                    case 'Engineer':
                        employeeAnswers.engCards += employees;
                        break;
                    case 'Intern':
                        employeeAnswers.intCards += employees;
                        break;
                    default:
                        break;
                }

            }

            init(employeeAnswers);
        }
    })
};

// Function to write the HTML file
const writeHTML = util.promisify(fs.writeFile);

// Function to initialize the writing of the HTML file
const init = (answers) => {
    writeHTML(`${__dirname}/dist/index.html`, generateHTML(answers))
        .then(() => console.log('Successfully wrote index.html file!'))
        .catch((err) => console.log(err));
}

// Calling the prompt user function
promptUser()



