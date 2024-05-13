import { useState } from 'react';
import './Login.css';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  const isFormValid = () => {
    return (
      email.length > 0 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      password.length >= 8 &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/.test(password)
    );
  };

  const handleSignIn = () => {
    if (isFormValid()) {
        axios.post('http://localhost:8080/api/v1/auth/login', { // Make POST request to backend API for login
          email,
          password,
        })
        .then(response => {
          console.log('Login successful:', response.data);
          // Store the token in local storage or state
          const token = response.data.token;
          // You can store the token in local storage or state for further use
          console.log('Token:', token);
          localStorage.setItem('token', token);

          if(email==='admin@gmail.com' && password==='Admin@123')
          {
            navigate('/Components/AdminHomePage')
          }
          else
          {
            navigate('/Components/UserHomePage')
          }
          // Optionally, you can redirect the user to the home page or handle the response as needed
        })
        .catch(error => {
          console.error('Login failed:', error);
          // Handle login failure
        });
    
      // Check for admin credentials
      if (email === 'admin@gmail.com' && password === 'Admin@123') {
        console.log('Admin Sign In successful. Redirecting to Admin Home Page');
        navigate('/Components/AdminHomePage');
      } else {
        console.log('User Sign In successful. Redirecting to User Home Page');
        // navigate('/Components/UserHomePage');
      }
    } else {
      console.log('Form is not valid. Cannot sign in.');
    }
  };

  return (
    <>
    <form>
    <body>
    <div className="container1">
        <div className="item">
          <img src = "https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=ais" style = {{float:'left'}} width={600} height={"auto"}/>
        </div>
        <div className="login-section">
            <div className="form-box login">
                <form action="">
                    <h2 style = {{color:'rgb(36, 94, 200)'}}>Sign In</h2>
                    
                    <div className="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div className="input-box">
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>

                      <center>
                        {/* <Link to = "/Components/UserHomePage"> */}
                        <Button
                          className="signup-btn"
                          type="button"
                          variant="contained"
                          color="primary"
                          onClick={handleSignIn}
                          disabled={!isFormValid()}
                        >
                        Sign In
                      </Button>
                      {/* </Link> */}
                      </center>
                    
                    <div className="create-account">
                        <p>New User? <Link to="/Components/Auth/SignUp"><u>Sign Up</u></Link> </p>
                    </div>
                </form>
            </div>
            </div>
        </div>
    
</body>
</form>
</>
)
};

export default SignIn