import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
// import { useEffect,useState } from 'react';
// import axios from 'axios';

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const PlansList = ({ plans, handleDeletePlan }) => {
    const navigate = useNavigate();
  return(
  <StyledList>
            {plans.map((plan) => (
                <li key = {plan.planId}>
                <div className="plan-border-box">
                  <div className="p2">
                    <div className="plan-partition">
                        <ul className="plan-data-plan-display">
                          <li className="li-1" style = {{width:20,paddingLeft:10}}>{plan.planId}</li>
                          <li className="li-1" style = {{width:30,paddingLeft:50}}>{plan.planName}</li>
                          <li className="li-1" style = {{width:30,paddingLeft:50}}>{plan.planType}</li>
                          <li className="li-1" style = {{width:30,paddingLeft:50}}>{plan.planValidity}</li>
                          <li className="li-1" style = {{width:30,paddingLeft:50}}>Rs. {plan.planPrice}</li>
                        </ul>
                      <ul className="plan-data-plan-display">
                        <li className="li-1" style = {{width:20,paddingLeft:10}}>Plan Id</li>
                        <li className="li-1" style = {{width:20,paddingLeft:50}}>Plan Name</li>
                        <li className="li-1" style = {{width:30,paddingLeft:50}}>Plan Type</li>
                        <li className="li-1" style = {{width:30,paddingLeft:50}}>Plan validity</li>
                        <li className="li-1" style = {{width:30,paddingLeft:50}}>Plan price</li>
                      </ul>
                    </div>
                    <div className='plans-btn'>
                      <Button
                        variant='contained'
                        onClick={() => {
                          navigate("/Components/UserPages/Recharge", {
                            state: { selectedPlan: plan }
                          });
                        }}
                      >
                        Recharge
                      </Button>
                    </div>
                    <p>&nbsp;&nbsp;Additional benefits</p>
                    <ul className="plan-horizontal-scroll">
                      <li>{plan.planDetails}</li>
                    </ul>
                  </div>
                </div>
                </li>
              ))}
  </StyledList>
  )
};

PlansList.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      planId: PropTypes.number.isRequired,
      planType: PropTypes.string.isRequired,
      planName: PropTypes.string.isRequired,
      planValidity: PropTypes.string.isRequired,
      planDetails: PropTypes.string.isRequired,
      planPrice: PropTypes.number.isRequired
      // Add other plan properties with their respective types and requirements
    })
  ).isRequired,
  handleDeletePlan: PropTypes.func.isRequired,
};

export default PlansList;
