import React, { useContext } from 'react'
import counterContext from '../context/CounterContext'
import authContext from '../context/AuthContext'

const CounterFunc = () => {
    const data = useContext(counterContext)
const obj = useContext(authContext)
const {counter,setCounter} = obj
    console.log(data)

    let incCounter=()=>{
setCounter(counter + 1)
    }

  return (
    <div>CounterFunc
        <h1>{data.name}</h1>
        <h1>{counter}</h1>
        <button onClick={incCounter}>incCounter</button>
    </div>
  )
}

export default CounterFunc