/* eslint-disable */
import React, { useContext , useState} from 'react';
import {AppContext} from "../context/AppContext"

const Budget = () => {
    const {budget,dispatch, currency} = useContext(AppContext)

    const {hm, setHm} = useState(0)

    const changeB =() =>{

        dispatch({
            type:"SET_BUDGET",
            payload:hm
        })
    }
    return (
        <div className="alert alert-dark">
            <span>
                Budget: {currency}
                <input
                type="number"
                value ={budget}
                onChange = {changeB}
                ></input>
            
            </span>
   

        </div>

    )
}

export default Budget
