import { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  input {
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }

  select {
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

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    padding: 10px;
    background-color: #eaf2f8;
    border-radius: 5px;
  }
`;

const RechargeHist = () => {
  const [option, setOption] = useState('all');
  const [email, setEmail] = useState('');
  const [history, setHistory] = useState([]);

  const handleViewHistory = () => {
    if (option === 'all') {
      // Implement logic to fetch entire recharge history
    } else if (option === 'user') {
      // Implement logic to fetch recharge history based on email
    }
  };

  return (
    <StyledContainer>
      <h2>View Recharge History</h2>
      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="all">All Users</option>
        <option value="user">Specific User</option>
      </select>
      {option === 'user' && (
        <input
          type="text"
          placeholder="User's Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      )}
      <button onClick={handleViewHistory}>View History</button>
      <ul>
        {history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default RechargeHist;