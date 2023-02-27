import React,{useContext} from "react"
import { AppContext } from "../context/AppContext"
import { FaTimesCircle,FaPlusCircle } from 'react-icons/fa';


const ExpenseItem = (props) => {
    const {currency,dispatch}=useContext(AppContext)

    const handleAddItem=() => {
        dispatch({
            type:"ADD_EXPENSE",
            payload:{
                name:props.id,
                cost:10
            }
        })
    }
    const handleDeleteItem = () =>{
        dispatch({
            type:"RED_EXPENSE",
            payload:{
                name:props.id,
                cost:10
            }
        })
    }

    return (
        <tr>
            <td>{props.id}</td>
            <td>{currency}{props.cost}</td>
            <td><FaPlusCircle size='2.2em' color="green" onClick={handleAddItem}></FaPlusCircle></td>
            <td><FaTimesCircle size='2.2em' color="red" onClick={handleDeleteItem}></FaTimesCircle></td>
        </tr>
    )
}

export default ExpenseItem
