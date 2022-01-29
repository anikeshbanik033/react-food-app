import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import {IntlProvider} from 'react-intl'
import store from './Store/configureStore'
import intlJosn from './i18n/en-EN'
import './index.css';


ReactDOM.render(
  <Provider store = {store}>
    <IntlProvider
      key = {intlJosn.locale}
      locale = {intlJosn.locale}
      messages = {intlJosn.message}
    >
      <App />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
