import React from 'react'

const Button = ({children, className}) => {
  return (
   <div className="cta-buttons">
     <button className='back'>
      Go back
      </button>
      <button className={className}>
          {children}
      </button>
   </div>
  )
}

export default Button