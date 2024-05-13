                                           
import { Toolbar, AppBar, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom'
// import * as React from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Box from '@mui/material/Box';

const UserNavbar = () => {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    // const [anchorElUser, setAnchorElUser] = React.useState(null);
    
    // const handleOpenNavMenu = (event) => {
    //       setAnchorElNav(event.currentTarget);
    //     };
      
    // const handleCloseNavMenu = () => {
    //   setAnchorElNav(null);
    // };
          
    // const handleCloseUserMenu = () => {
    //   setAnchorElUser(null);
    // };
    return (
        <AppBar position="static" style={{backgroundColor:'#333', color:'white', marginTop:-10, width: '100%'}}>
      <Toolbar>
      <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open Profile">
        <Link to = "/Components/UserPages/Profile">
          <AccountCircle style = {{color:"white",width:30,height:"auto",marginTop:15}}/>
        </Link>
      </Tooltip>
      </Box>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{marginLeft: 150}}>
          EZRECHARGE
        </Typography>
        <Link to="/Components/UserHomePage">
          <Button color="inherit" style={{color : 'white'}}>
            Home
          </Button>
        </Link>
        <Link to="/Components/UserPages/Plans">
          <Button color="inherit" style={{color : 'white'}}>
            Plans
          </Button>
        </Link>
        <Link to="/Components/UserPages/AddOns">
        <Button color="inherit" style={{color : 'white'}}>
          AddOns
        </Button>
        </Link>
        {/* <Link to="/Components/UserPages/Recharge">
        <Button color="inherit" style={{color : 'white'}} >
          Recharge
        </Button>
        </Link> */}
        <Link to="/Components/AdminPages/Chatbot">
        <Button color="inherit" style={{color : 'white'}} >
          Support
        </Button>
        </Link>
        <Link to="/Components/UserPages/Feedback">
        <Button color="inherit" style={{color : 'white'}} >
          Feedback
        </Button>
        </Link>
        <Link to='/Components/Auth/SignIn'><Button style = {{color:"white"}} Link to="/about">
          Logout
        </Button></Link>
        
      </Toolbar>
    </AppBar>
  );
};

export default UserNavbar;
