#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter words you wanted to be count",
});
let words = answer.sentence.trim().split(" ");
let wordCounter = words.length;
console.log(`\nYour sentence has ${wordCounter} words`);
