import React, { StrictMode } from 'react';
import App from './App';
import {createRoot} from "react-dom/client"
import { store } from './redux/store';
import {Provider} from 'react-redux';

// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </StrictMode>
)