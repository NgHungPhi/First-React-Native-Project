import React, {createContext, useReducer} from 'react';
import authInitialState from './initialStates/authInitialState';
import contactsInitialState from './initialStates/contactsInitialState';
import auths from './reducers/auth';
import contacts from './reducers/contacts';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auths, authInitialState);
  const [contactsState, contactDispatch] = useReducer(
    contacts,
    contactsInitialState,
  );

  return (
    <GlobalContext.Provider
      value={{authState, contactsState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
