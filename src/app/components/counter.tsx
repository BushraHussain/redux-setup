"use client"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addByAmount } from "../store/counterSlice"
import { RootState } from "../store"
import { useState } from "react"

export default function Counter () {

  const dispatch = useDispatch();     
                                                             // reducer //variable 
  const counterValue = useSelector((state: RootState) => state.counterr.counter);
  const[inputAmount, setInputAmount] = useState(0); // For input amount

  function handleAdd(){
    dispatch(increment());
  }

  function handleSub(){
    dispatch(decrement(1));
  }

  function handleChange() {
    dispatch(addByAmount(inputAmount));
    setInputAmount(0);
  }

    return(
        <div>
            <p>Counter Value is : {counterValue}</p><br/><br/>
            <button className="w-28 h-10 bg-blue-500 text-white " onClick={handleAdd}>Add by 1</button> <br/><br/>
            <button className="w-28 h-10 bg-red-500 text-white " onClick={handleSub}>Minus by 1</button><br/><br/>
            <input 
              className="w-28 h-10 px-1 border border-red-600" 
              type="number"
              value = {inputAmount}
              onChange={(e)=> setInputAmount(Number(e.target.value))}  
            />

            <button className="w-52 h-10 mx-2 bg-green-200" onClick={handleChange}>Add by input amount</button>
              

            

        </div>
    )
}