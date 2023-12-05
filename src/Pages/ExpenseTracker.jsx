import React, { useState } from 'react'
import "./ExpenseTracker.css"
import NavBar from '../Components/NavBar'
import app from "../Firebase"
import { getDatabase, ref, set, get } from "firebase/database";
import { serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { uid } from 'uid';

const auth = getAuth(app);
const db = getDatabase(app);

const ExpenseTracker = () => {
    const [totalMoney,settotalMoney] =useState(0)
    const [Note,setNote] =useState("")
    const [Money,setMoney] =useState(0)
    const [value,setValue] =useState("")




    const witeData =()=>{
        const UID = uid()
        set(ref(db,`users/${auth.currentUser.uid}/${UID}`), {
            Money,
            Note,
            Type:value,
            Date: serverTimestamp(),
            ID:UID,
          });
    }
  return (
    <>
    <NavBar/>
    <div className="OuterAppBox">

        <div className="AppBox">
        <div className="TotalMoney">
            <p>{totalMoney}</p>
        </div>
        <div className="TransactionsInput">
            <input type="number" placeholder='Money' value={Money} onChange={e=>setMoney(e.target.value)}/>
            <input type="text" placeholder='Note' value={Note} onChange={e=>setNote(e.target.value)}/>

            <select id="dropdown" value={value} onChange={(e)=>setValue(e.target.value)}>
                <option value="Income">Income</option>
                <option value="Expense">Expense</option>
            </select>
            <button onClick={witeData}>Add</button>
        </div>
        <div className="Transactions">
            <p>Transactions</p>
            
        </div>
        </div>

    </div>
    </>
    )
}

export default ExpenseTracker