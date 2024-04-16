#! /usr/bin/env node

import inquirer from "inquirer"; 
import chalk from 'chalk';

console.log(chalk.bgGreenBright.bold(`\n \t "Wellcome to Currency Converter" \n`))

const currency: any = {
    USD: 1, // Base currency
    EUR: 0.91,
    GBP: 0.76,
    SAR: 74.10,
    AED: 75.69,
    PKR: 280
};


let user_answer = await inquirer.prompt(
[
    {
        name: "from",
        message:chalk.bgMagenta("Enter from Currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR"]
    },
    {
        name: "to",
        message:chalk.bgRedBright("Enter To currency"),
        type: "list",
        choices: ["USD", "EUR", "GBP", "SAR", "AED", "PKR"]
    },
    {
        name: "amount",
        message:chalk.bgCyanBright("Enter your amount"),
        type: "number"
    }
]
)

let fromAmount = currency[user_answer.from]
let toAmount = currency[user_answer.to]
let amount = user_answer.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);


