import { useState, useEffect } from 'react';
// import { Button } from '@mui/material';
import axios from 'axios';
import styled from 'styled-components';
import AdminNavbar from '../../Components/AdminNavbar';
import './AdminPages.css';

const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const StyledForm = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 8px 16px;
    cursor: pointer;
    border: none;
    margin-right: 10px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }
  }
`;

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AdminAddOns = () => {
  const [addOnData, setAddOnData] = useState({
    addonId: 0,
    addonName: '',
    addonPrice: '',
    addonDetails: '',
    addonValidity: '',
  });

  useEffect(() => {
    fetchAddons();
  }, []);

  const fetchAddons = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:8080/api/plans/api/customer/addon`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setAddOnData(Array.isArray(response.data) ? response.data : [response.data]);
    } catch (error) {
      console.error('Error fetching addons:', error);
    }
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddOnData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddAddon = async () => {
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:8080/api/addons/api/admin/addon', addOnData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchAddons();
      setAddOnData({
        addonId: 0,
        addonName: '',
        addonPrice: '',
        addonDetails: '',
        addonValidity: '',
      });
    } catch (error) {
      console.error('Error saving addon:', error);
    }
  };

  const handleDeleteAddon = async (addonId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/addons/${addonId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchAddons();
    } catch (error) {
      console.error('Error deleting addon:', error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <StyledDashboard>
        <h1>Mobile Recharge Portal Admin</h1>
        <StyledForm>
          <div>
            <label>Addon Name: </label>
            <input type="text" name="addonName" value={addOnData.addonName} onChange={handleChange} />
            <br />
            <label>Addon Price: </label>
            <input type="number" name="addonPrice" value={addOnData.addonPrice} onChange={handleChange} />
            <br />
            <label>Addon Details: </label>
            <input type="text" name="addonDetails" value={addOnData.addonDetails} onChange={handleChange} />
            <br />
            <label>Addon Validity: </label>
            <input type="text" name="addonValidity" value={addOnData.addonValidity} onChange={handleChange} />
            <br />
            <button onClick={handleAddAddon}>Add Addon</button>
          </div>
        </StyledForm>
        {/* <StyledList>
          <div>
            <h2>All Addons</h2>
            <ul>
              {addOnData.map((addon) => (
                <div key={addon.addonId} className="plan-box">
                  <h3>{addon.addonName}</h3>
                  <p>Details: {addon.addonDetails}</p>
                  <p>Validity: {addon.addonValidity}</p>
                  <p>Amount: {addon.addonPrice}</p>
                  <button onClick={() => handleDeleteAddon(addon.addonId)}>Delete</button>
                </div>
              ))}
            </ul>
          </div>
        </StyledList> */}
      </StyledDashboard>
    </>
  );
};

export default AdminAddOns;
