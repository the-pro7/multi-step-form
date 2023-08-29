import './styleshseet/App.scss'
import SideNav from './components/SideNav'
import FormPage from "./components/FormPage"
import PlanSelect from './components/PlanSelect'
import Button from './components/Button'

const App = () => {

  return (
   <div className="form-container">
    <SideNav />
    <FormPage />
    {/* <PlanSelect /> */}
    <Button className="next">Next step</Button>
   </div>
  )
}

export default App

