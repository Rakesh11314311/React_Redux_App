/** 
A Redux store is the central place where your application's state lives when using Redux for state management.
configureStore is a helper function to create a Redux store with good defaults

*/
import { configureStore } from '@reduxjs/toolkit'
//Provider is a special React component. It connects Redux to your React app so that all components inside can access the Redux store.
import { Provider } from 'react-redux'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import UserReducer from './UserReducer';

/**
 * Following Creates the Redux store using configureStore.
  The reducer object tells Redux:

  "users key in state is handled by UserReducer."
 */
const store = configureStore({
  reducer: {
    users: UserReducer
  }
})

/**
 * configureStore expects an object.
reducer is where you put your Redux slices — pieces of your state logic.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
