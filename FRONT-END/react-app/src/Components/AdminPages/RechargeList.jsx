
import styled from 'styled-components';

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const RechargeList = () => (
  <StyledList>
            <div className="transaction-history">
            <h2>Recharge History</h2>
            
            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - Rs.20</h3>
                    {/* <p>Sim: Airtel</p> */}
                    <p>Acc Name: Natasha</p>
                    <p>Phone number: 8229487754</p>
                    <p>Date: 2024-02-01</p>
                </div>
                <p>Status: Success</p>
            </div>

            <div className="transaction-item">
                <div className="transaction-info">
                    <h3>Recharge - Rs.15</h3>
                    <p>Sim: Jio</p>
                    <p>Acc Name: Noha</p>
                    <p>Phone number: 9952948145</p>
                    <p>Date: 2023-12-28</p>
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
        </div>
  </StyledList>
);

export default RechargeList;