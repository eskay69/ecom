import React from 'react'

const Butt = (props) => {
  return (
    <>
    <button style={{
        backgroundColor: `${props.color}`,
        color:"white",
        border: 'none',
        padding: "10px 20px",
        margin: "10px",
    }}>{props.text}</button>
    </>
  )
}

export default Butt