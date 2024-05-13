import "./UserPages.css"
import { useState } from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from "@mui/material";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import UserNavbar from "../UserNavbar";

const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const [value, setValue] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setValue(newValue);
  };

  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  function showPopup(message) {
    document.getElementById('popupMessage').innerHTML = message;
    document.getElementById('overlay').style.display = 'flex';
  }
  
  function closePopup() {
    document.getElementById('overlay').style.display = 'none';
  }
  const handleRecharge = () => {
    // Your recharge logic goes here
    // Assuming a successful recharge, show the success popup
    console.log('button clicked')
    setShowSuccessPopup(true);
  };

  return (
    <>
    <UserNavbar/>
    <div className="feedback-body">
      <br/><br/><br/>
      <div className="feedback-container">
        <div className="form-box login">
          <Typography variant="h4" gutterBottom>
            Feedback
          </Typography>

          <div className="input-box">
            <input type="name" placeholder='Name' required onChange = {e => setName(e.target.value)}/>
            <div className='error'> {name.length === 0 ?"Please enter a valid Name" : ""}</div>
          </div>

          <div className="input-box">
            <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
            <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
          </div>

          <TextField
          multiline
          rows={4}
          fullWidth
          required
          label="Share your feedback"
          variant="outlined"
          margin="normal"
          value={feedback}
          onChange={e => setFeedback(e.target.value)}
          />
          <div className='error'> {feedback.length === 0 ?"Please enter valid Feedback" : ""}</div>
          <br/>

        <div className="rating-line">
          <Typography variant="h5" gutterBottom className="rating" style = {{fontSize:20}}>Rate our service:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Typography>
            <Box component="fieldset" mb={3} borderColor="transparent">
              <Rating
                name="rating"
                value={value}
                precision={0.5} // You can use half stars by setting precision to 0.5
                onChange={handleRatingChange}
              />
            </Box>
        </div>
          <center>
          <div className="recharge-btn">
              <button type="button" onClick={handleRecharge}>Submit Feedback</button>
            </div>
          </center>
        </div>
      </div>
    </div>
    {showSuccessPopup && (
        <div className="overlay" id="overlay">
          <div className="popup-box">
            <p className="popup-message" id="popupMessage">Feedback submitted successfully!</p>
            <button className="popup-close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
        
      )}
    </>
  );
};

export default Feedback;
