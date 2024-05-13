import RechargeHist from './RechargeHist';
import styled from 'styled-components';
import "./AdminPages.css"
import RechargeList from './RechargeList';
import AdminNavbar from "../../Components/AdminNavbar"

const StyledDashboard = styled.div`
  font-family: 'Arial', sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const RechargeHistory = () => {
  return (
    <>
    <AdminNavbar/>
    <StyledDashboard>
      <h1>Mobile Recharge Portal Admin</h1>
      <RechargeHist />
      <RechargeList />
    </StyledDashboard>
  </>
  )
}

export default RechargeHistory