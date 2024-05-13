// import AddOnCards from '../UserPages/AddOnCards'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledList = styled.div`
  margin-top: 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AddonsList = ({ addons, handleDeleteAddon }) => {
  return (
    <StyledList>
      <div>
        <h2>All Addons</h2>
        <ul>
          {addons && addons.map((addon) => (
            <li key={addon.addonId}>
              {`ID: ${addon.addonId}, Name: ${addon.addonName}, Price: ${addon.addonPrice}, Details: ${addon.addonDetails}, Validity: ${addon.addonValidity}`}
              <button onClick={() => handleDeleteAddon(addon.addonId)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </StyledList>
  );
};

AddonsList.propTypes = {
  addons: PropTypes.arrayOf(
    PropTypes.shape({
      addonId: PropTypes.number.isRequired,
      addonName: PropTypes.string.isRequired,
      addonValidity: PropTypes.string.isRequired,
      addonDetails: PropTypes.string.isRequired,
      addonPrice: PropTypes.number.isRequired
    })
  ).isRequired,
  handleDeleteAddon: PropTypes.func.isRequired,
};


export default AddonsList;
