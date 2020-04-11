import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

const initialState={
    transaction: []
}

//Create context

export const Context = createContext(initialState);

//Provider

export const Provider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState)

//Actions
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}
function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

    return (<Context.Provider value = {{
        transaction: state.transaction,
        deleteTransaction,
        addTransaction}}>
        {children}
    </Context.Provider>)
}