const fs = require("fs");

const { Circle, Triangle, Square } = require("./lib/shapes");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += '<g>';
    svgString += `${answers.shape}`;

    let shapeChoice;
    if (answers.shape === 'Circle') {
        shapeChoice = new Circle();
        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === 'Triangle') {
    shapeChoice = new Triangle();
    svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
        shapeChoice = new Square();
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    }
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += '</g>';
    svgString += '</svg>';

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });
}

function promptUser() {
    inquirer 
    .prompt([
        {
            name: 'text',
            text: 'input',
            message: 'What text would you like your logo to display? (Up to 3 characters)',
        },
        {
            name: 'textColor',
            type: 'input',
            message: 'Choose text color (Keyword OR hexadecimal number)',
        },
        {
            name: 'shape',
            type: 'list',
            message: 'What shape would you like the logo to be?',
            choices: ['Circle, Triangle, Square']
        },
        {
            name: 'shapeBackgroundColor',
            type: 'input',
            message: 'Choose shape color (Keyword OR hexadecimal number)'
        }
    ])
    .then((answers) => {
        if (answers.text.length > 3) {
            console.log("Text cannot be greater than 3 characters");
            promptUser();
        } else {
            writeToFile('logo.svg', answers);
        }
    });
}

promptUser();