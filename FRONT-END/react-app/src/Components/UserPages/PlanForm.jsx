
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

const PlanForm = ({ planData, handleChange, handleViewPlans }) => {
  return (
    <StyledForm>
      <h2>Plans</h2>
      <label>Plan Type: </label>
      <input
        type="text"
        placeholder="Plan Type : prepaid/postpaid"
        name = "planType"
        value={planData.planType}
        onChange={handleChange}
      />
        <button onClick={handleViewPlans}>View Plans</button>
    </StyledForm>
  );
};

PlanForm.propTypes = {
  planData: PropTypes.shape({
    planId: PropTypes.number.isRequired,
    planType: PropTypes.string.isRequired,
    planName: PropTypes.string.isRequired,
    planValidity: PropTypes.string.isRequired,
    planDetails: PropTypes.string.isRequired,
    planPrice: PropTypes.number.isRequired
    // Add other planData properties with their respective types and requirements
  }).isRequired,
  handleChange: PropTypes.func.isRequired,
  handleViewPlans: PropTypes.func.isRequired,
};

export default PlanForm;
