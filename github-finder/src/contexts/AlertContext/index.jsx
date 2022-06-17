import { createContext, useEffect, useReducer } from 'react';
import alertReducer from '../AlertReducer';

export const AlertContext = createContext();

export default function AlertProvider({ children }) {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  function setAlert(msg, type) {
    dispatch({
      type: 'SET_ALERT',
      payload: { msg, type }
    });
  }

  function clearAlert() {
    dispatch({
      type: 'CLEAR_ALERT'
    });
  }

  useEffect(() => {
    const timer = setTimeout(clearAlert, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <AlertContext.Provider
      value={{
        alert: state,
        setAlert
      }}
    >
      {children}
    </AlertContext.Provider>
  );
}
