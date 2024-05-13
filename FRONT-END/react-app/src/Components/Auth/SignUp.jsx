import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {Link,useNavigate} from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState("");

  // const [formValid, setFormValid] = useState(false);

  const isFormValid = () => {
    // Add validation logic for other fields if needed
    return (
      uname.length > 0 &&
      email.length > 0 &&
      /^\S+@\S+\.\S+$/.test(email) &&
      password.length >= 8 &&
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/.test(password) &&
      password === confirmPassword
      // contactNo.length === 10
    );
  };

  const handleSignUp = async (e) => {
    // You can perform signup logic here
      e.preventDefault();  
    // If successful signup, navigate to the sign-in page
    if (isFormValid()) {
      // Perform signup logic, if needed
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', {
          name: uname,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          role: role
        });
        // Handle successful signup here
        console.log(response.data);
        navigate("/Components/Auth/SignIn");
      } catch (error) {
        // Handle signup error here
        setError("Failed to create account. Please try again.");
      }
      // Example: Call an API to register the user

      // Redirect to sign-in page
      // navigate('/Components/AdminHomePage');
      // Replace the following line with your actual navigation logic
      console.log('Signup successful. Redirecting to Sign In');
    } else {
      console.log('Form is not valid. Cannot sign up.');
    }
  };

  return (
    <>
    <form>
    <body>
    <div className="container1">
        <div className="item">
          <img src = "https://img.freepik.com/free-vector/privacy-policy-concept-illustration_114360-7853.jpg?w=740&t=st=1706025875~exp=1706026475~hmac=83385e9491200607a016ecb11e6739f58265a31e42b18d3f6e8c23f7b18a43b9" style = {{float:'left'}} width={600} height={"auto"}/>
        </div>
        <div className="login-section">
            <div className="form-box login">
                <form action="">
                    <h2 style = {{color:'rgb(36, 94, 200)'}}>Sign Up</h2>
                    <div className="input-box">
                        <input type="text" placeholder='UserName' required onChange = {e => setUname(e.target.value)}/>
                        <div className='error'>{uname.length===0?"Enter Your Name":""}</div>
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email-id' required onChange = {e => setEmail(e.target.value)}/>
                        <div className='error'> {email.length === 0 || !((/^\S+@\S+\.\S+$/).test(email))?"Please enter your valid Email-ID" : ""}</div>
                    </div>

                    <div className="input-box">
                        <input type="password" pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/" 
                title="Password must contain letters [ Both Uppercase and LowerCase ] and numbers and one special character" placeholder='Password'required  onChange = {e => setPassword(e.target.value)}/>
                    <div className='error'>{password.length < 8 || !((/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/-]).{8,}$/).test(password)) ?"Please enter valid Password" : ""} </div>
                    </div>

                    <div className="input-box">
                        <input type="password"
                title="Both Password must be the same" placeholder='Confirm Password'required  onChange = {e => setConfirmPassword(e.target.value)}/>
                    <div className='error'>{password === confirmPassword ?"":"Passwords do not match"} </div>
                    </div>
                    
                    {/* <div className="input-box">
                        <input type="text" placeholder='Contact Number' required  onChange = {e => setContactNo(e.target.value)}/>
                        <div className='error'>{contactNo.length !== 10?"Enter valid contact number ":""}</div>
                    </div> */}

                    <TextField
                    label="Role"
                    id="outlined-error-helper-text"
                    select style = {{width:340}} 
                    name={role}
                    onChange={e => setRole(e.target.value)}
                    required
                    >
                  <MenuItem value="user">User</MenuItem>
                  <MenuItem value="admin">Admin</MenuItem>
                  </TextField>
                  <br/><br/>

                      <center>
                        {/* <Link to = "/Components/Auth/SignIn"> */}
                          <Button
                            className="signup-btn"
                            type="button"
                            variant="contained"
                            color="primary"
                            onClick={handleSignUp}
                            disabled={!isFormValid()}
                          >
                            Sign Up
                          </Button>
                        {/* </Link> */}
                        <div className='error'>{error} </div>
                      </center>
                    
                    <div className="create-account">
                        <p>Already have an Account? <Link to="/Components/Auth/SignIn"><u>Sign In</u></Link> </p>
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

export default SignUp;