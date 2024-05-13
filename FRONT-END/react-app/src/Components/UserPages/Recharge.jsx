import "./UserPages.css"
import UserNavbar from '../UserNavbar';
import { useLocation } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const Recharge = () => {
  
  const location = useLocation();
  const [selectedPlan,setSelectedPlan] = location.state ? useState(location.state.selectedPlan) : useState(null);
  const[cno,setCno] = useState("");
  const[cid,setCid] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  function showPopup(message) {
    document.getElementById('popupMessage').innerHTML = message;
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
  

  const handleRecharge = async() => {
    // Your recharge logic goes here
    // Assuming a successful recharge, show the success popup
    const token = localStorage.getItem('token');

    try {
      await axios.post(`http://localhost:8080/api/recharges/addPlan/${cno}/${cid}`, selectedPlan, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      const updatedPlans = await axios.get('http://localhost:8080/api/plans', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      setSelectedPlan(updatedPlans.data);
    } catch (error) {
      console.error('Error adding plan:', error);
    }

    setSelectedPlan({
      planId: 0,
      planType: 'prepaid',
      planName: '',
      planValidity: '',
      planDetails: '',
      planPrice: 0,
    });
    // Assuming a successful recharge, show the success popup
    console.log('button clicked')
    setShowSuccessPopup(true);
  };

  document.addEventListener('DOMContentLoaded', function () {
    const upiDetails = document.getElementById('upiDetails');
    const cardDetails = document.getElementById('cardDetails');
    const cardExpiryDetails = document.getElementById('cardExpiryDetails');
    const cardCvvDetails = document.getElementById('cardCvvDetails');

    const paymentMethodRadio = document.querySelector('.payment-method');

    paymentMethodRadio.addEventListener('change', function () {
      const selectedMethod = document.querySelector('input[name="paymentMethod"]:checked').value;

      if (selectedMethod === 'upi') {
        upiDetails.style.display = 'block';
        cardDetails.style.display = 'none';
        cardExpiryDetails.style.display = 'none';
        cardCvvDetails.style.display = 'none';
      } else {
        upiDetails.style.display = 'none';
        cardDetails.style.display = 'block';
        cardExpiryDetails.style.display = 'block';
        cardCvvDetails.style.display = 'block';
      }
    });
  });
  return (
    <>
      <UserNavbar/>
      <div className="recharge-body">
      <br/>
        <div className="container">
          <div className="header">
            <h2>Recharge Page</h2>
          </div>

          <div className="plan-details">
          {selectedPlan && (
            <>
            {/* <h2>Selected Plan Details</h2> */}
            <br/>
                <p style={{ color: "#333" }}>Plan: {selectedPlan.planPrice}</p>
                <p style={{ color: "#333" }}>Data: {selectedPlan.planName}</p>
                <p style={{ color: "#333" }}>Validity: {selectedPlan.planValidity}</p>
                <p style={{ color: "#333" }}>Additional benefits: {selectedPlan.planDetails}</p>
                </>
          )}
          </div>

          <div className="payment-form">
            <h2 style = {{color:"#333"}}>Payment Information</h2>

            <div className="form-group payment-method">
              {/* <label>Select Payment Method:</label> */}
              <input type = "text" placeholder="mobile number" value = {cno} required onChange = {e => setCno(e.target.value)}/>
              <div className='error'> {cno.length < 10 ?"Please enter valid Contact number" : ""}</div>
              <input type = "number" placeholder="User Id" value = {cid} required onChange = {e => setCid(e.target.value)}/>
              <div className='error'> {cid.length === 0 ?"Please enter valid Customer Id" : ""}</div>
              <label>Select Payment Method:</label>
              <div className="recharge-radio">
              <label htmlFor="upi">UPI</label>
              <input className="radio-1" type="radio" id="upi" name="paymentMethod" value="upi" defaultChecked/>
              </div>
              <div className="recharge-radio">
              <label  htmlFor="card">Card</label>
              <input className="radio-2" type="radio" id="card" name="paymentMethod" value="card"/>
              </div>
            </div>

            <div className="form-group" id="upiDetails">
              <label htmlFor="upiId">UPI ID:</label>
              <input type="text" id="upiId" name="upiId" placeholder="Enter UPI ID" required/>
            </div>

            <div className="form-group" id="cardDetails" style={{display: "none"}}>
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter card number" required/>
            </div>

            <div className="form-group" id="cardExpiryDetails" style={{display: "none"}}>
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YYYY" required/>
            </div>

            <div className="form-group" id="cardCvvDetails" style={{display: "none"}}>
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required/>
            </div>

            <div className="recharge-btn">
              <button type="button" onClick={handleRecharge}>Recharge Now</button>
            </div>
          </div>
        </div>
      </div>
      {showSuccessPopup && (
        <div className="overlay" id="overlay">
          <div className="popup-box">
            <p className="popup-message" id="popupMessage">Mobile is recharged successfully!</p>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>

      )}
    </>
  )
}

export default Recharge