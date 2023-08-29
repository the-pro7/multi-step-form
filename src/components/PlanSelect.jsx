import React from 'react'
import Plan from './Plan'
import ArcadeImage from "../assets/images/icon-arcade.svg"
import AdvanceImage from "../assets/images/icon-advanced.svg"
import ProImage from "../assets/images/icon-pro.svg"

const PlanSelect = () => {
  return (
    <section className='plan-select'>
        <h1 className='plan-select__heading'>Select your plan</h1>
        <p className="plam-select__description">You have the option of monthly or yearly billing.</p>
        <div className="plan-select__plans">
            <Plan image={ArcadeImage} alternative="Arcade image" className="arcade"/>
            <Plan image={AdvanceImage} alternative="Advance image" className="advance"/>
            <Plan image={ProImage} alternative="Arcade image" className="pro"/>
        </div>
    </section>
  )
}

export default PlanSelect