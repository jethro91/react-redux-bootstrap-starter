import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import configureStore from 'reduxs';
import App from 'App';
import registerServiceWorker from 'registerServiceWorker';

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <Route path="/" component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
