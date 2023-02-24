/* eslint-disable */
import React, {useContext} from "react"
import {AppContext} from '../context/AppContext'

const ExpenseTotal = () => {
    const {expenses,currency} = useContext(AppContext)

    let eachPay = []
    expenses.map(item => eachPay.push(item.cost))
    let result = eachPay.reduce((f,b)=> f+b)

    return (
        <div className='alert alert-primary'>
        <span>Spent so far: {currency}{result}</span> 
        </div>
    )
}

export default ExpenseTotal