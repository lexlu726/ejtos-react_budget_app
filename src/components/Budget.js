/* eslint-disable */
import React, { useContext , useState} from 'react';
import {AppContext} from "../context/AppContext"

const Budget = () => {
    const {budget,dispatch, currency} = useContext(AppContext)

    const {hm, setHm} = useState(0)

    const changeB =(val) =>{

        dispatch({
            type:"SET_BUDGET",
            payload:val
        })
    }
    return (
        <div className="alert alert-dark">
            <span>
                Budget: {currency}
                <input
                type="number"
                value ={budget}
                onChange = {event=> changeB(event.target.value)}
                ></input>
            
            </span>
   

        </div>

    )
}

export default Budget
