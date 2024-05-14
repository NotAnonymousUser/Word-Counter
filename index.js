#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter words you wanted to be count",
});
let counter = answer.sentence.trim().split(" ");
let wordCounter = counter.length;
console.log(`Your sentence has ${wordCounter} words`);
