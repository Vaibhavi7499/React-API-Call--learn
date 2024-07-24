import React, { useContext } from 'react'
import authContext from '../context/AuthContext'
const GetCounter = () => {
    const data=useContext(authContext)

    let decCounter=()=>{
         data.setCounter(data.counter - 1)
    }

  return (
    <div>
        <h1>{data.counter}</h1>
        <button onClick={decCounter}>decCounter</button>
    </div>
  )
}

export default GetCounter