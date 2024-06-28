import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App.js';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store.js';
import { Toaster } from 'react-hot-toast';

const root = createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
    <App/>
    <Toaster/>
    </Provider>
)
