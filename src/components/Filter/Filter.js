import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { filterContacts } from '../../redux/phoonebook-actions';
import { getFilter } from '../../redux/phonebookSelectors';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <label className={s.label} htmlFor="">
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(filterContacts(e.target.value))}
      />
    </label>
  );
};
export default Filter;
