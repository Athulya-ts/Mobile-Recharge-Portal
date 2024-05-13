                                    
import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const AdminNavbar = () => {
        
    return (
        <AppBar position="static" style={{backgroundColor:'#333', color:'white', marginTop:-10, width: '100%'}}>
      <Toolbar>
      <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Profile">
        <Link to = "/Components/AdminPages/AdminProfile">
          <AccountCircle style = {{color:"white",width:30,height:"auto",marginTop:15}}/>
        </Link>
      </Tooltip>
      </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: 150}}>
          EZRECHARGE
        </Typography>
        <Link to = "/Components/AdminHomePage">
          <Button color="inherit" style={{color : 'white'}} >
            HOME
          </Button>
        </Link>
        <Link to = "/Components/AdminPages/PrepaidPlans">
          <Button color="inherit" style={{color : 'white'}} >
            Plans
          </Button>
        </Link>
        {/* <Link to = "/Components/AdminPages/PostpaidPlans">
          <Button color="inherit" style={{color : 'white'}} >
            Postpaid Plans
          </Button>
        </Link> */}
        <Link to = "/Components/AdminPages/AdminAddOns">
          <Button color="inherit" style={{color : 'white'}} >
            Addons
          </Button>
        </Link>
        <Link to = "/Components/AdminPages/RechargeHistory">
          <Button color="inherit" style={{color : 'white'}} >
            RechargeHistory
          </Button>
        </Link>
        {/* <Button color="inherit" Link to="/contact">
          Support
        </Button> */}
        <Link to='/Components/Auth/SignIn'><Button style = {{color:"white"}} Link to="/about">
          Logout
        </Button></Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default AdminNavbar;
