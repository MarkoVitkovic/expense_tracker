const Transaction = require('../models/Transaction')

// get all transactions
// GET/api/v1/transaction
// public

exports.getTransaction = (req,res,next) => {
    res.send('GET transaction')
  }

// add transactions
// POST/api/v1/transaction
// public

exports.addTransaction = (req,res,next) => {
    res.send('ADD transaction')
  }

// delete transactions
// DELETE/api/v1/transaction/:id
// public

exports.deleteTransaction = (req,res,next) => {
    res.send('DELETE transaction')
  }