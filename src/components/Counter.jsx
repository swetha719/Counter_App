import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'


function Counter() {
  const [amount,setAmount]=useState(0)


  // dispatch method
  const dispatch=useDispatch()
 const {count}= useSelector((state)=>state.counterReducer)

//  checking value in counter
const  handleIncrementByAmount=()=>{
  if(amount){
    dispatch(incrementByAmount(Number(amount)))
  }
  else{
    alert("please enter the amount")
  }
}


  return (
    <div className='d-flex align-items-center justify-content-center flex-column p-3 mt-5' style={{maxHeight:'100vh',backgroundColor:'black',width:'100%'}}>
        <h1 className='text-white p-3'>Counter App</h1>
        <div className='d-flex align-items-center justify-content-center flex-column border border-3 border-white p-3 rounded' style={{height:'400px',width:'600px'}}>
            <h1 className='fs-1 text-white'>{count}</h1>
            <div className='d-flex align-items-center justify-content-around '>
                <button onClick={()=>dispatch(decrement())} className='btn btn-warning m-4' style={{color:'white',width:'150px'}}>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='btn btn-danger m-4' style={{width:'150px'}}>Reset</button>
                <button onClick={()=>dispatch(increment())} className='btn btn-success m-4' style={{width:'150px'}}>increment</button>

            </div>
            <div className='d-flex justify-content-around mt-5 'style={{ gap: '10px' }}>
                <input onChange={(e)=>setAmount(e.target.value)} type="text" className='form-control' style={{height:'50px',width:'400px'}} placeholder='increment count by ampount' />
                <button onClick={handleIncrementByAmount} className='btn ' style={{background:'blue',color:'white'}} >Increment by amount</button>
            </div>
        </div>
    </div>
  )
}

export default Counter