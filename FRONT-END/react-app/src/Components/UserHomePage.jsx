import UserNavbar from "./UserNavbar"
import LandingPage from "./LandingPage"

const UserHomePage = () => {
  return (
    <div>
        <div className="nav">
            <UserNavbar/>
        </div>
        <LandingPage/>
    </div>
  )
}

export default UserHomePage