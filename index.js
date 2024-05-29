#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var chalk_1 = require("chalk");
console.log(chalk_1.default.italic.blueBright("*****   WELCOME TO STUDENT MANAGEMENT SYSTEM   *****\n"));
var condition = true;
while (condition) {
    var nameOfStd = await inquirer_1.default.prompt([
        {
            name: "stdName",
            type: "input",
            message: "Enter Your Full Name:"
        }
    ]);
    var studentId = Math.floor(1000 + Math.random() * 2000);
    console.log("Student ".concat(nameOfStd.stdName, " added with ID ").concat(studentId));
    var courses = await inquirer_1.default.prompt([
        {
            name: "course",
            type: "list",
            message: "Kindly Enter Your Course:",
            choices: ["Web Development", "Aritficial Intelligence", "Cloud Computing", "Python Programming", "Mobile App Development"]
        }
    ]);
    var addMoreCourse = await inquirer_1.default.prompt([
        {
            name: "AddCourse",
            type: "list",
            message: "Want to More Course:",
            choices: ["Yes", "No"]
        }
    ]);
    var newCourse = void 0;
    if (addMoreCourse.AddCourse === "Yes") {
        newCourse = await inquirer_1.default.prompt([
            {
                name: "addnew",
                type: "list",
                message: "Enter Additional Course:",
                choices: ["Web Development", "Aritficial Intelligence", "Cloud Computing", "Python Programming", "Mobile App Development"]
            }
        ]);
        console.log("You Added New Course");
    }
    else {
        console.log("No New courses Added!");
    }
    var yourBalance = 10000;
    var amount = await inquirer_1.default.prompt([
        {
            name: "payment",
            type: "list",
            message: "What You Want!",
            choices: ["View Balance", "Pay Fees"]
        }
    ]);
    var payPayment = void 0;
    if (amount.payment === "View Balance") {
        console.log("Your Balance is ".concat(yourBalance));
    }
    else if (amount.payment === "Pay Fees") {
        payPayment = await inquirer_1.default.prompt([
            {
                name: "Amount",
                type: "input",
                message: "Enter Your Amount:"
            }
        ]);
        if (payPayment.Amount < yourBalance) {
            yourBalance -= payPayment.Amount;
            console.log("Your Payment is Successfully Done ");
            console.log("Now Your Balance is ".concat(yourBalance, " "));
        }
        else if (payPayment.Amount > yourBalance) {
            console.log("Sorry! Your Current Balance is ".concat(yourBalance));
        }
    }
    console.log(chalk_1.default.bgCyanBright.black("\n*****  Your Status  *****\n"));
    console.log("* Student Name: " + nameOfStd.stdName);
    console.log("* Student ID: " + studentId);
    console.log("* Course: " + chalk_1.default.blueBright(courses.course));
    if (newCourse) {
        console.log("* Additional Course:", chalk_1.default.blueBright(newCourse.addnew));
    }
    if (payPayment) {
        console.log("* Amount Paid:", payPayment.Amount);
    }
    if (yourBalance) {
        console.log("* Your Remaining Balance:", yourBalance);
    }
    console.log(chalk_1.default.italic.blueBright("\n*****THANK YOU*****"));
    break;
}
