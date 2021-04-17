import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const Filter = ({ updateFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={updateFilter} id="find"></input>
    </div>
  );
};

const mapDispatchProps = dispatch => {
  return {
    updateFilter: event => dispatch(actions.updateFilter(event.target.value)),
  };
};

Filter.propTypes = {
  updateFilter: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchProps)(Filter);
