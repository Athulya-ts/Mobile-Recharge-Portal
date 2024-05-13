// import axios from 'axios';

// const API_BASE_URL = 'http://localhost:8080/api/plans';

// export const fetchPlans = async (token) => {
//   try {
//     const response = await axios.get(`${API_BASE_URL}/api/customer/${planType}`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching plans:', error);
//     throw error;
//   }
// };

// export const addPlan = async (token, planData) => {
//   try {
//     await axios.post(API_BASE_URL + '/post', planData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//   } catch (error) {
//     console.error('Error adding plan:', error);
//     throw error;
//   }
// };
