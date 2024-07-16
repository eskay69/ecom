import React, {useState} from 'react'

function Counter () {

    const [count, setCount] = useState (0)

    const addNum=()=>{
        setCount(count+1)
    }
    const subNum=()=>{
        setCount(count-1)
    }

  return (
    <div>
        Counter
        <button onClick={addNum}>+</button>
        <span>{count}</span>
        <button onClick={subNum}>-</button>
        </div>
  )

}
export default Counter