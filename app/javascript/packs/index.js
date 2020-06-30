import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import App from '../components/App';

const rootComponent = (
  <Provider store={store}>
      <App />
  </Provider>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    rootComponent,
    document.body.appendChild(document.createElement('div')),
  )
})