# OOP SVG Logo-Maker

## Description
A Node.js command-line application that takes in user input to generate a logo and save it as an SVG file.

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Video
[Walkthrough Video](https://youtu.be/o9Ux76INpWg)

## Installation
* Clone the github repo
* Install VS Code
* Install node.js
* Run 'npm i' in the terminal to install the dependencies

## Usage
To run this application, use the command line to navigate to the repo directory, and use 'npm i' to install the dependencies. The command line will ask you a series of questions. After these questions are answered, a 'logo.svg' file will be generated in the 'examples' folder of the repo. Right click on this file and select 'Open Preview'.

## Credits
* Various student study groups at 2023 KU Spring/Summer Coding Bootcamp
* Links and resources provided by intstructors and TA's:
    * [Example SVG](https://static.fullstack-bootcamp.com/fullstack-ground/module-10/circle.svg)
    * [Scalable Vector Graphics (SVG)](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)
    * [SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
    * [Basic SVG shapes](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes)
    * [Text in SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Texts)
    * [SVG VS Code extension](https://marketplace.visualstudio.com/items?itemName=jock.svg)