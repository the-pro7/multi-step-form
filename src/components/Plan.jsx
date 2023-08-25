import React from 'react'

const Plan = ({image, alternate}) => {
  return (
    <div className='plan-select__plans-plan'>
        <img src={image} alt={alternate}/>
    </div>
  )
}

export default Plan