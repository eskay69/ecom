import React from 'react'
import './Card.css'


const Card = ({name,comment,img}) => {
  return (
    <div className="card">
        <img src={img} alt={name} />
        <div>
            <h2>{name}</h2>
            <p>
                {comment}
            </p>
        </div>
    </div>
    

  )
}

export default Card