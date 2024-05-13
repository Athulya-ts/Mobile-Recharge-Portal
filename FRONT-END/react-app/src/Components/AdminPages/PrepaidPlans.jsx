import "./AdminPages.css"
import PlansList from './PlansList';
import PlanForm from './PlanForm';
import styled from 'styled-components';
import AdminNavbar from "../AdminNavbar";
import axios from 'axios';
import { useState,useEffect } from "react";


const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const PrepaidPlans = () => {
  const [filteredPlans, setFilteredPlans] = useState([]);
  const [planData, setPlanData] = useState({
    planId: 0,
    planType: 'prepaid',
    planName: '',
    planValidity: '',
    planDetails: '',
    planPrice: 0,
  });

  //get plans
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`http://localhost:8080/api/plans/api/customer/${planData.planType}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setPlanData(response.data);
        setFilteredPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlanData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  //post plans
  const handleAddPlan = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.post('http://localhost:8080/api/plans/post', planData, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      const updatedPlans = await axios.get('http://localhost:8080/api/plans', {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });

      setPlanData(updatedPlans.data);
    } catch (error) {
      console.error('Error adding plan:', error);
    }

    setPlanData({
      planId: 0,
      planType: 'prepaid',
      planName: '',
      planValidity: '',
      planDetails: '',
      planPrice: 0,
    });
  };

  //delete plan
  const handleDeletePlan = async (planId) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:8080/api/plans/${planId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Optional: Reload plans after deleting
      const updatedPlans = await axios.get(`http://localhost:8080/api/plans/api/customer/${planData.planType}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setPlanData(updatedPlans.data);
      setFilteredPlans(updatedPlans.data);
    } catch (error) {
      console.error('Error deleting plan:', error);
    }
    setPlanData({
      planId: 0,
      planType: 'prepaid',
      planName: '',
      planValidity: '',
      planDetails: '',
      planPrice: 0,
    });
  };

  //update
  const handleUpdatePlan = async (plan) => {
    const token = localStorage.getItem('token');
  
    try {
      await axios.put(`http://localhost:8080/api/plans/${plan.planId}`, planData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      // Optional: Reload plans after updating
      const updatedPlans = await axios.get(`http://localhost:8080/api/plans/api/customer/${planData.planType}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      setPlanData({
        planId: 0,
        planType: 'prepaid',
        planName: '',
        planValidity: '',
        planDetails: '',
        planPrice: 0,
      });
  
      setFilteredPlans(updatedPlans.data);
    } catch (error) {
      console.error('Error updating plan:', error);
    }
  };
  
  
  // const handleViewPlans = () => {
    // Filter plans based on the entered plan type
    // const filtered = plans.filter((plan) => plan.planType === planData.planType);
    // setFilteredPlans(filtered);
    
    const handleViewPlans = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`http://localhost:8080/api/plans/api/customer/${planData.planType}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFilteredPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };
    
  
  return (
    <>
    <AdminNavbar/>
    <StyledDashboard>
      <h1>Mobile Recharge Portal Admin</h1>
      <PlanForm 
          planData={planData}
          handleChange={handleChange}
          handleAddPlan={handleAddPlan}
          handleViewPlans={handleViewPlans}
      />
      <PlansList plans={filteredPlans} handleDeletePlan={handleDeletePlan} handleUpdatePlan={handleUpdatePlan}/>
    </StyledDashboard>
  </>
  )
}

export default PrepaidPlans
