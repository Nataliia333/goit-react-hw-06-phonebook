import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ filter, contacts, onDelete, onClose }) => {
  const onFilterContacts = () => {
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
    return filterContacts;
  };

  const handlerDelete = event => {
    onDelete(event.currentTarget.id);
    onClose();
  };

  return (
    <ul>
      {(filter ? onFilterContacts() : contacts).map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number}
          <button onClick={handlerDelete}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    contacts: state.contacts.items,
    filter: state.contacts.filter,
  };
};

const mapDispatchProps = dispatch => ({
  onDelete: value => dispatch(actions.deleteContact(value)),
});

ContactsList.propTypes = {
  filter: PropTypes.string,
  contacts: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchProps)(ContactsList);
