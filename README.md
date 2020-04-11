# Expense Tracker
> Project that track expenses, you can add or delete transaction.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)

## General info
App that track expenses. Made for study react. In this project I use react hooks(useState, useContext, useReducer) and context API. 

## Screenshots
![](https://github.com/MarkoVitkovic/react-expense_tracker/blob/master/img.png)

## Technologies
* [React](https://reactjs.org/docs/getting-started.html) - version 16.13.1
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [CSS](https://devdocs.io/css/) - version 3
* [React-dom](https://github.com/facebook/react) - version 16.13.1



## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

npm start</br>
npm test</br>
npm run build</br>
npm run eject</br>
npm run build

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Code Examples
Code:</br>
`case 'DELETE_TRANSACTION':`</br>
            `return {`</br>
                `...state,`</br>
                `transaction: state.transaction.filter(transaction => transaction.id !== action.payload)`</br>
            `}`</br>
        `case 'ADD_TRANSACTION' :`</br>
            `return {`</br>
               ` ...state,`</br>
                `transaction: [action.payload,...state.transaction]`</br>
            `}`</br>
        `default:`</br>
            `return state;`</br>
            

## Features
List of features ready and TODOs for future development
* Add transaction
* Remove transaction
* Balance
* Income
* Expenses

To-do list:
* Backend

## Status
Project is: _finished_

## Inspiration
Credits: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!
