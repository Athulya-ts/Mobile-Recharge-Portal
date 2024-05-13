import AdminNavbar from "./AdminNavbar"
import LandingPage from "./LandingPage"

const AdminLandingPage = () => {
  return (
    <>
      <div className="nav">
        <AdminNavbar/>
      </div>
      <LandingPage/>
    </>
  )
}

export default AdminLandingPage