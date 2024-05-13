// import "./UserPages.css"
// import { useNavigate } from 'react-router-dom';
// import { Button } from "@mui/material";

// const AddOnCards = () => {
//   const navigate = useNavigate();
//   return (
//     <div className="addon-card-set">
//             <div className="addon-card">
//               <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
//               <div className="addon-details">
//                 <div className="addon-title">2 GB Data Booster</div>
//                 <div className="addon-title">1 month validity</div>
//                 <div className="addon-price">Rs. 50</div>
//                 <Button
//                       variant='contained'
//                       style = {{width:90,float:'right'}}
//                       onClick={() => {
//                         navigate("/Components/UserPages/Recharge");
//                       }}
//                     >
//                       Recharge
//                     </Button>
//               </div>
//             </div>
//             <div className="addon-card">
//               <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
//               <div className="addon-details">
//                 <div className="addon-title">5 GB Data Booster</div>
//                 <div className="addon-title">1 month validity</div>
//                 <div className="addon-price">Rs. 100</div>
//               </div>
//             </div>

//             <div className="addon-card">
//               <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image"width = {120} height = {"auto"}/>
//               <div className="addon-details">
//                 <div className="addon-title">10 GB Data Booster</div>
//                 <div className="addon-title">1 month validity</div>
//                 <div className="addon-price">Rs. 150</div>
//               </div>
//             </div>

//             <div className="addon-card">
//               <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image" width = {120} height = {"auto"}/>
//               <div className="addon-details">
//                 <div className="addon-title">10 GB Data Booster</div>
//                 <div className="addon-title">1 month validity</div>
//                 <div className="addon-price">Rs. 150</div>
//               </div>
//             </div>
//           </div>
//   )
// }

// export default AddOnCards

import  { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
// import PropTypes from 'prop-types';
import axios from 'axios';

  const AddOnCards = () => {
    const [addons, setAddons] = useState([]);
    const navigate = useNavigate();
  // const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    axios.get('http://localhost:8080/api/addons/api/customer/addon', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(response => {
      setAddons(response.data);
    })
    .catch(error => {
      console.error('Error fetching addons:', error);
    });
  }, []);
  
  // Empty dependency array ensures the effect runs only once
  
  return (
    <div className="addon-card-set">
      {addons.map((addon) => (
        <li key = {addon.addonId}>
        <div className="addon-card">
        <img src="https://img.freepik.com/free-vector/mobile-sim-phone-card-users-with-smartphones-mobile-phone-network-smartphone-plastic-card-microchip-wireless-cellphone-communication-concept-vector-isolated-illustration_335657-2228.jpg?w=1060&t=st=1706513059~exp=1706513659~hmac=2b88bbd3192464c12667726c9430b6d6a89e30a210ebc668e3a4248c72aa09d3" alt="Addon Image" width={120} height="auto" />
        <div className="addon-details">
          <div className="addon-title">{addon.addonName}</div>
          <div className="addon-title">{addon.addonValidity}</div>
          <div className="addon-price">Rs. {addon.addonPrice}</div>
          <div className="addon-price">{addon.addonDetails}</div>
          <Button
            variant='contained'
            style={{ width: 90, float: 'right' }}
            onClick={() => {
              navigate("/Components/UserPages/AddonsRecharge",{
              state: { selectedPlan: addon }
            });
            }}
          >
            Recharge
          </Button>
        </div>
      </div>
        </li>
        ))}
    </div>
  );
};

// AddOnCards.propTypes = {
//   addon: PropTypes.shape({
//     addonId: PropTypes.number.isRequired,
//     addonName: PropTypes.string.isRequired,
//     addonValidity: PropTypes.string.isRequired,
//     addonPrice: PropTypes.number.isRequired,
//     addonDetails: PropTypes.string.isRequired,
//     // image: PropTypes.string.isRequired,
//   }).isRequired,
// };
export default AddOnCards;
