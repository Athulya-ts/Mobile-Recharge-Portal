import "./UserPages.css"
import UserNavbar from '../UserNavbar';
// import { useState,useEffect } from "react";
// import axios from "axios";

const Profile = () => {
    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');
  return (
    <>
        <UserNavbar/>
      <div className="profile-container">
        <div className="profile-header">
            <div className="profile-avatar">
                <img src="https://img.freepik.com/free-photo/international-day-education-celebration_23-2150930948.jpg?size=626&ext=jpg&ga=GA1.1.949399214.1697784670&semt=sph" alt="User Avatar"/>
            </div>
            <div className="profile-details">
                <h2>Athulya</h2>
                <p>Email: {userEmail}</p>
                <p>Password: {userPassword}</p>
                {/* <p>Sim: Reliance Jio</p> */}
            </div>
        </div>

        <div className="transaction-history">
            <h2>Recharge History</h2>
            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - Rs.20</h3>
                    {/* <p>Sim: Airtel</p> */}
                    <p>Acc Name: Athulya</p>
                    <p>Phone number: 8229487754</p>
                    <p>Date: 2024-02-01</p>
                </div>
                <p>Status: Success</p>
            </div>

            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - Rs.499</h3>
                    {/* <p>Sim: Jio</p> */}
                    <p>Acc Name: Athulya</p>
                    <p>Phone number: 8229487754</p>
                    <p>Date: 2023-08-23</p>
                </div>
                <p>Status: Success</p>
            </div>
        </div>

    </div>
    </>
  )
}

export default Profile

