import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './app/store';
import './index.css';
import App from './App';
import { fetchUsers } from './features/users/usersSlice';

store.dispatch(fetchUsers());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store= {store}>
    <App />
    </Provider>
  </React.StrictMode>
);

