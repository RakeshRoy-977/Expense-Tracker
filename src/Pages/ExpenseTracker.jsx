import React, { useState } from 'react'
import "./ExpenseTracker.css"
import NavBar from '../Components/NavBar'

const ExpenseTracker = () => {
    const [totalMoney,settotalMoney] =useState(0)
    const [note,setNote] =useState("")
    const [Money,setMoney] =useState(0)
    const [value,setValue] =useState("")
  return (
    <>
    <NavBar/>
    <div className="OuterAppBox">

        <div className="AppBox">
        <div className="TotalMoney">
            <p>{totalMoney}</p>
        </div>
        <div className="TransactionsInput">
            <input type="number" placeholder='Money' />
            <input type="text" placeholder='Note' />

            <select id="dropdown" value={value} onChange={(e)=>setValue(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button>Add</button>
        </div>
        </div>

    </div>
    </>
    )
}

export default ExpenseTracker