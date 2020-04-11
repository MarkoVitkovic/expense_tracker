import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import { Income } from './components/Income';
import { TransactionList } from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction'
import {Provider} from './context/GlobalState'

function App() {
  return (
    <Provider>
      <Header/>
      <div className="container">
        <Balance/>
        <Income/>
        <TransactionList/>
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
