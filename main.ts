#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk'

let currencyConverter = {
    "USD":{
        "USD": 1,
        "EUR": 0.92,
        "PKR": 278 
    },
    "EUR":{
        "USD": 1.08,
        "EUR": 0.92,
        "PKR": 300 
    },
    "PKR":{
        "USD": 0.0036,
        "EUR": 0.0033,
        "PKR": 1 
    },
}

// input prompt

const answer : {
    from :"USD"|"EUR"|"PKR",
    to : "USD"|"EUR"|"PKR",
    amount : number
} = await inquirer.prompt([
    {
        name: "from",
        message :chalk.blueBright("Enter your currency which you want to convert?"),
        type : "list",
        choices :["USD","EUR","PKR"]
    },
    {
       
        name: "to",
        message :chalk.redBright("Select which currency convert?"),
        type : "list",
        choices :["USD","EUR","PKR"]
    },
    {
       
        name: "amount",
        message :chalk.green("Enetr your amount in number"),
        type : "number",
        choices :["USD","EUR","PKR"]
    }
])


const {from,to,amount} = answer;

// conversion
if (from && to && amount) {
    let result = currencyConverter[from][to] * amount;
    console.log(chalk.magenta(`your conversion from ${from} to ${to} is ${result}`))
}else{
    console.log("Invalid Operator Selected")
}