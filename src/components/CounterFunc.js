import React, { useContext } from 'react'
import counterContext from '../context/CounterContext'

const CounterFunc = () => {
    const data = useContext(counterContext)
    console.log(data)
  return (
    <div>CounterFunc
        <h1>{data.name}</h1>
    </div>
  )
}

export default CounterFunc