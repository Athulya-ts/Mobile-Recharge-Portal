import AdminNavbar from "../../Components/AdminNavbar"
// import { Card, CardContent, Avatar, Typography, Button } from '@mui/material';
import styled from 'styled-components';
import "../UserPages/UserPages.css"

const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

// const StyledProfile = styled.div`
//   max-width: 400px;
//   margin: 20px auto;

//   .card {
//     background-color: #ffffff;
//     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//     text-align: center;
//   }

//   .avatar {
//     width: 100px;
//     height: 100px;
//     margin: 20px auto;
//   }

//   .profile-info {
//     margin-bottom: 20px;
//   }

//   .edit-button {
//     background-color: #3498db;
//     color: #ffffff;
//     margin-top: 20px;

//     &:hover {
//       background-color: #2980b9;
//     }
//   }
// `;
const AdminProfile = () => {
  const userEmail = localStorage.getItem('email');
  const userPassword = localStorage.getItem('password');
  return (
    <>
    <AdminNavbar />
    <StyledDashboard>
      <center><h1>Mobile Recharge Portal Admin</h1></center>
      <div className="profile-container" style = {{borderRadius:5}}>
        <div className="profile-header">
            <div className="profile-avatar">
                <img src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930948.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=sph" alt="User Avatar"/>
            </div>
            <div className="profile-details">
                <h2>Admin</h2>
                <p>Email: {userEmail}</p>
                <p>Password: {userPassword}</p>
                {/* <p>Phone: +91 82294494877</p> */}
            </div>
        </div>
      </div>
  </StyledDashboard>
  </>
  )
}

export default AdminProfile