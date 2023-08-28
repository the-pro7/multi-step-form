import React from 'react'

const Plan = ({image, alternative, className}) => {
  return (
    <div className={`plan-select__plans-plan ${className}`}>
        <img src={image} alt={alternative}/>
    </div>
  )
}

export default Plan