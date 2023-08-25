import './styleshseet/App.scss'
import SideNav from './components/SideNav'
import FormPage from "./components/FormPage"
import PlanSelect from './components/PlanSelect'

const App = () => {

  return (
   <div className="form-container">
    <SideNav />
    <FormPage />
    <PlanSelect />
   </div>
  )
}

export default App

