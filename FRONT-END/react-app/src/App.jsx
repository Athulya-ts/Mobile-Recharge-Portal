
import AppName from "./Components/AppName"
import SignUp from "./Components/Auth/SignUp"
import SignIn from "./Components/Auth/SignIn"
import LandingPage from "./Components/LandingPage"
import AdminHomePage from "./Components/AdminHomePage"
import UserHomePage from "./Components/UserHomePage"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UserNavbar from "./Components/UserNavbar"
import AddOns from "./Components/UserPages/AddOns"
import Feedback from "./Components/UserPages/Feedback"
import Plans from "./Components/UserPages/Plans"
import Recharge from "./Components/UserPages/Recharge"
import AddonsRecharge from "./Components/UserPages/AddonsRecharge"
import Profile from "./Components/UserPages/Profile"
import RechargeHistory from "./Components/AdminPages/RechargeHistory"
import PrepaidPlans from "./Components/AdminPages/PrepaidPlans"
import AdminAddOns from "./Components/AdminPages/AdminAddOns"
import AdminProfile from "./Components/AdminPages/AdminProfile"
import AddOnCards from "./Components/UserPages/AddOnCards"
import Chatbot from "./Components/AdminPages/Chatbot"

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path = "/" element = {<AppName/>}/>
        <Route path = "/Components/Auth/SignUp" element = {<SignUp/>}/>
        <Route path = "/Components/Auth/SignIn" element = {<SignIn/>}/>
        <Route path = "/Components/UserNavbar" element = {<UserNavbar/>}/>
        <Route path = "/Components/LandingPage" element = {<LandingPage/>}/>
        <Route path = "/Components/AdminHomePage" element = {<AdminHomePage/>}/>
        <Route path = "/Components/UserHomePage" element = {<UserHomePage/>}/>
        <Route path = "/Components/UserPages/AddOns" element = {<AddOns/>}/>
        <Route path = "/Components/UserPages/Feedback" element = {<Feedback/>}/>
        <Route path = "/Components/UserPages/Plans" element = {<Plans/>}/>
        <Route path = "/Components/UserPages/AddOnCards" element = {<AddOnCards/>}/>
        <Route path = "/Components/UserPages/Recharge" element = {<Recharge/>}/>
        <Route path = "/Components/UserPages/AddonsRecharge" element = {<AddonsRecharge/>}/>
        <Route path = "/Components/UserPages/Profile" element = {<Profile/>}/>
        <Route path = "/Components/AdminPages/RechargeHistory" element = {<RechargeHistory/>}/>
        <Route path = "/Components/AdminPages/PrepaidPlans" element = {<PrepaidPlans/>}/>
        <Route path = "/Components/AdminPages/Chatbot" element = {<Chatbot/>}/>
        <Route path = "/Components/AdminPages/AdminAddOns" element = {<AdminAddOns/>}/>
        <Route path = "/Components/AdminPages/AdminProfile" element = {<AdminProfile/>}/>
      </Routes>
    </div>
      </BrowserRouter>
  )
}

export default App