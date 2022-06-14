import * as contactsFetchAction from './phoonebook-actions';
// import { fetchContactsRequest ,fetchContactsSuccess,fetchContactsError} from './phoonebook-actions';
import { contactsAPI } from '../contactsAPI';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsFetchAction.fetchContactsRequest());
  try {
    const allContacts = await contactsAPI();
    dispatch(contactsFetchAction.fetchContactsSuccess(allContacts));
  } catch (error) {
    dispatch(contactsFetchAction.fetchContactsError(error));
  }
};
