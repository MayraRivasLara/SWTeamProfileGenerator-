const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./src/employee/manager');
const Engineer = require('./src/employee/engineer')
const Intern = require('./src/employee/intern');
const generateHtmlFile = require('./src/html/generate-html');

let employees = [];

// prompt questions
function questions() {


    return inquirer.prompt([
        {
            // ask team member that you want to add - options: employee, intern or manager.
            message: "What is the role of the employee to be added?",
            name: "role",
            type: "list",
            choices: [
                'Intern',
                'Engineer',
                'Manager',
            ]
        },

        {
            // name 
            message: "What is the employee's name?",
            name: "Employee name",
            type: "input",
        },

        {
            // email
            message: "What is the employee's email?",
            name: "email",
            type: "input",
        },

        {
            // id        
            message: "What is the employee's id?",
            name: "id",
            type: "input",
        },

        //specific question for each category
        {
            message: "What is the employee's office number?",
            name: "officeNumber",
            type: "input",
            when: (answers) => answers.role === 'Manager',
        },

        {
            message: "What is the employee's Github name?",
            name: "github",
            type: "input",
            when: (answers) => answers.role === 'Engineer',
        },

        {
            message: "What is the employee's school?",
            name: "schoolName",
            type: "input",
            when: (answers) => answers.role === 'Intern',
        },

        // do you want to add another employee?
        {
            message: "Do you want to add another employee?",
            name: "continueAdding",
            type: "confirm",
        },

    ]).then((answer) => {

        // if yes, repeat same questions.
        if (answer.role === 'Manager') {
            employees.push(
                new Manager(
                    answer.name,
                    answer.email,
                    answer.id,
                    answer.officeNumber,
                )
            );
        };

        if (answer.role === 'Engineer') {
            employees.push(
                new Engineer(
                    answer.name,
                    answer.email,
                    answer.id,
                    answer.github,
                )
            );
        };

        if (answer.role === 'Intern') {
            employees.push(
                new Intern(
                    answer.name,
                    answer.email,
                    answer.id,
                    answer.schoolName,
                )
            );
        };

        if (answer.continueAdding) {
            return questions();
        }else {
            // if not, generate HTML base on the members added.
            const html = generateHtmlFile(employees);

            fs.writeFileSync(__dirname + '/dist/output.html', html, 'utf-8');

            process.exit(0);
        }
    });
}
    questions();