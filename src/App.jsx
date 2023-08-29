import './styleshseet/App.scss'
import SideNav from './components/SideNav'
import FormPage from "./components/FormPage"
import PlanSelect from './components/PlanSelect'
import Button from './components/Button'

const App = () => {

  return (
   <div className="container">
    <SideNav />
    <FormPage />
    {/* <PlanSelect /> */}
    <Button>Next step</Button>
   </div>
  )
}

export default App

