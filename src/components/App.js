import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux';

export const App = () => {
  const { status, error } = useSelector(state => state.contacts);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      {error && <h2>An error occerd:{error}</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      <h2>Phonebook</h2>
      <Phonebook />
      <Filter />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};
