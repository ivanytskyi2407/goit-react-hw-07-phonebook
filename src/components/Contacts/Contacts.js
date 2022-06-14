import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import s from './Contacts.module.css';
import { fetchContacts } from '../../redux/phoneBookOperation';
import { getItems, getFilter } from '../../redux/phonebookSelectors';
import { removeContact } from '../../redux/phoneBookOperation';
const Contacts = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter).toLowerCase();
  const items = useSelector(getItems);
  const contacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      {contacts.length > 0 && (
        <ul>
          {contacts.map(contact => {
            return (
              <li key={contact.id} className={s.item}>
                <button
                  key={contact.id}
                  name={contact.name}
                  className={s.buttonDelete}
                  type="button"
                  onClick={() => dispatch(removeContact(contact.id))}
                >
                  Delete
                </button>
                {contact.name}: {contact.number}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Contacts;
