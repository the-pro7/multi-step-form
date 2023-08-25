import React from 'react'
import './styleshseet/App.scss'
import SideNav from './components/SideNav'
import FormPage from "./components/FormPage"

const App = () => {

  return (
   <div className="form-container">
    <SideNav />
    <FormPage />
   </div>
  )
}

export default App

