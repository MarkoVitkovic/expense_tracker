# Expense Tracker
> Full stack app, add backend api with express and mongodb.

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
Full stack(mern) expense tracker, now connected to database on mongodb, full and finish backend. Feel free to download or clone this repo.

## Screenshots
![](https://github.com/MarkoVitkovic/react-expense_tracker/blob/master/img.png)
![](https://github.com/MarkoVitkovic/node.js_express_mongodb-backend_for_expense_tracker/blob/master/img1.png)

## Technologies
* [Node.js](https://nodejs.org/en/docs/) - version 13
* [Express](https://expressjs.com/en/api.html) - version 4.x
* [mongoDB](https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&gclid=EAIaIQobChMIubLRzaa06AIVArDtCh2MgwEKEAAYASAAEgLyjvD_BwE)
## Setup
Open terminal(cmd) and navigate:</br>
`npx create-react-app my-app`</br>
`cd my-app`</br>
`npm start`</br>
Open source in Visual Studio Code.

## Available Scripts

In the project directory, you can run:

 npm install<br/>
 cd client npm install<br/>
 cd ..<br/>
 
 Run front and backend<br/>
 npm run dev<br/>
 
 Backend only<br/>
 npm run server<br/>
 
 Frontend only<br/>
 npm run client<br/>
 
 Build client<br/>
 cd client<br/>
 npm run build<br/>
 
 Prod<br/>
 npm start<br/>
 
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
* Full stack app

To-do list:
* none

## Status
Project is: _finished_

## Inspiration
Credits: [Traversy Media](https://www.youtube.com/user/TechGuyWeb)

## Contact
Created by [Marko Vitkovic](https://github.com/MarkoVitkovic) - feel free to contact me!
