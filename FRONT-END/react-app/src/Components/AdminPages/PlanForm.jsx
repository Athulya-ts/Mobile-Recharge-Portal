
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }

  label {
    display: block;
    margin-bottom: 10px;
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

const PlanForm = ({ planData, handleChange, handleAddPlan, handleViewPlans, handleUpdatePlan}) => {
  // const isUpdate = planData.planId !== undefined;
  return (
    <StyledForm>
      <h2>Add or Update Plans</h2>
      {/* <h2>{isUpdate ? 'Add, Update, View, Delete Plan' : 'Add, View, Delete Plan'}</h2> */}
      {/* {isUpdate && (
      <input type = "number" placeholder = "Plan Id" value = {planData.planId} onChange = {handleChange}/>
      )} */}
      <input
        type="text"
        placeholder="Plan Type : prepaid/postpaid"
        name = "planType"
        value={planData.planType}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Plan Name"
        name = "planName"
        value={planData.planName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Plan Validity"
        name = "planValidity"
        value={planData.planValidity}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Plan Details"
        name = "planDetails"
        value={planData.planDetails}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Plan Price"
        name = "planPrice"
        value={planData.planPrice}
        onChange={handleChange}
      />
      {/* {isUpdate ? (
        <>
          <button onClick={handleAddPlan}>Add Plan</button>
          <button onClick={handleViewPlans}>View Plans</button>
          <button onClick={handleUpdatePlan}>Update Plans</button>
        </>
        ):( */}
      <>
        <button onClick={handleViewPlans}>View Plans</button>
        <button onClick={handleAddPlan}>Add Plan</button>
        <button onClick={() => handleUpdatePlan(planData)}>Update Plan</button>

      </>
      {/* )}  */}
    </StyledForm>
  );
};

PlanForm.propTypes = {
  planData: PropTypes.shape({
    planId: PropTypes.number,
    planType: PropTypes.string.isRequired,
    planName: PropTypes.string.isRequired,
    planValidity: PropTypes.string.isRequired,
    planDetails: PropTypes.string.isRequired,
    planPrice: PropTypes.number.isRequired
    // Add other planData properties with their respective types and requirements
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddPlan: PropTypes.func.isRequired,
  handleViewPlans: PropTypes.func.isRequired,
  handleUpdatePlan: PropTypes.func.isRequired,
};

export default PlanForm;
