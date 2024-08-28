#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

console.log(chalk.bold.yellow`Welcome to the CountDown Timer `)

let userinput = await inquirer .prompt ([{
    type: "number",
    name:"countdown",
    message:"Enter Countdown duration in Seconds"
}])


if (userinput.countdown !== 0){
    console.log(chalk.bold.green`Starting Countdown for ${userinput.countdown} Seconds`)
    countdowntimer(userinput.countdown)
    
}
else (
    console.log(chalk.bold.red`Please Enter a Number grater than 0`)
)

function countdowntimer(seconds:number){
    const currenttime  =  Date.now();
    let userinput = seconds * 1000;
    const totoltime = currenttime + userinput

    let timer = setInterval(() =>{
        let currenttime = Date.now()
        let remainingtime = totoltime - currenttime

        if(remainingtime >= 0){
            process.stdout.write(chalk.bold.blue`${Math.round(Math.floor(remainingtime)/1000)} \n`)
        }

        else {
            clearInterval(timer)
            console.log(chalk.bold.red`\nTIMES UP`)
            console.log(chalk.bold.green`Thank you For Using Our Countdown Timer`)
    }


    },1000)
    
    }