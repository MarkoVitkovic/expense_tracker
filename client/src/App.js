import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import { TransactionList } from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction'
import {GlobalProvider} from './context/GlobalState'
import { IncomeExpenses } from './components/Income';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
