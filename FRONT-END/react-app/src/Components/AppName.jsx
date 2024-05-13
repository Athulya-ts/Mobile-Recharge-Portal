import Button from '@mui/material/Button';
import './main.css';
import { Link } from 'react-router-dom';

const AppName = () => {
    return (
        <div className='app-name-page'>
        <div className='app-name-left'>
            <br/><br/>
            <br/><br/>
            <img src = "https://img.freepik.com/free-photo/3d-hand-making-cashless-payment-from-smartphone_107791-16609.jpg?w=740&t=st=1705994136~exp=1705994736~hmac=bb5d3b14f08e33cbe537d1fd65ede5997c3f2aa0c2409bb4e61afa801ef7ad41" style = {{marginLeft:40}} width = {600} height = {"auto"}/>
        </div>
        <div className="app-name-head">
            <p className = 'app-name'  style = {{color:'white'}}>EZRecharge</p>
        </div>
        <div className='app-name-btn'>
            <Link to = "/Components/Auth/SignUp">
                <Button style={{ marginLeft : 400,height: 50,width:'auto',backgroundColor: 'rgba(255, 255, 255, 0.87)', color: 'steelblue' }} variant="outlined">SIGN UP</Button>
            </Link>
        </div>
    </div>
  )
}

export default AppName
