import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { store } from 'redux/store';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/goit-react-hw-08-phonebook/"> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
