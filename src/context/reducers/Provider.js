import React, {createContext, useReducer} from 'react';
import authInitialState from '../initialStates/authInitialState';
import contactsInitialState from '../initialStates/contactsInitialState';
import auths from './auth';
import contacts from './contacts';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auths, authInitialState);
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={[authState, contactsState, authDispatch, contactDispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
