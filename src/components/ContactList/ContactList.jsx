import propTypes from 'prop-types';
import css from 'container.module.css';
import { useSelector } from 'react-redux';
import { selectFilterContacts } from '../../redux/selectors';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilterContacts);

  return (
    <div className={css.container}>
      <ul>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            <ContactListItem contact={contact} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
};
