// import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
// import FormControl from '@mui/material/FormControl';
import PlansList from './PlansList';
import PlanForm from './PlanForm';
import './UserPages.css'
// import { Button } from '@mui/material';
import axios from 'axios';
import UserNavbar from '../UserNavbar';

const Plans = () => {
  const [filteredPlans, setFilteredPlans] = useState([]);

  const [planData, setPlanData] = useState({
    planId: 0,
    planType: 'prepaid',
    planName: '',
    planValidity: '',
    planDetails: '',
    planPrice: 0,
  });
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
      <div className='plans-body-user'>
        <UserNavbar/>
        <h1 className="plans-heading">Plans</h1>
        <div>
          <div className='results-container'>
            <div className="plan-container">
                <>
                          <PlanForm 
                          planData={planData}
                          handleChange={handleChange}
                          handleViewPlans={handleViewPlans}
                      />
                    <PlansList plans={filteredPlans} />
                </>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Plans

