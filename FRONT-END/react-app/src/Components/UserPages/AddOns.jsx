import UserNavbar from "../UserNavbar"
import "./UserPages.css"
import AddOnCards from './AddOnCards'

const AddOns = () => {

  return (
    <>
      <UserNavbar/>
      <div className="addons-body">
        <br/>
        <h1 style = {{color:"#333",marginLeft:350}}>ADDONS</h1>
        <br/><br/><br/><br/>
        <div className="add-ons-container">
          <div className="current-plan">
          <h2>CURRENT PLAN</h2>
            <p className="current-plan-p" style = {{color:"#333"}}>Plan: Rs. 509</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Data: 6 GB</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Validity: 1 month</p>
            <p className="current-plan-p" style = {{color:"#333"}}>Additional benefits: Get Rs.100 Cashback on FastTag</p>

          </div>
          <AddOnCards/>
        </div>
      </div>
    </>
  )
}

export default AddOns