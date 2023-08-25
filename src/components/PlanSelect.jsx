import React from 'react'
import Plan from './Plan'

const PlanSelect = () => {
  return (
    <section className='plan-select'>
        <h1 className='plan-select__heading'>Select your plan</h1>
        <p className="plam-select__description">You have the option of monthly or yearly billing.</p>

        <div className="plan-select__plans">
            <Plan />
        </div>
    </section>
  )
}

export default PlanSelect