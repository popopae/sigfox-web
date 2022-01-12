import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from 'app/store';
import { PersistGate } from 'redux-persist/integration/react';
import RouterApp from 'app/index';
import { HashRouter } from "react-router-dom";
import { injectStore } from 'app/middleware/axiosInterceptor';
// prepare store
const { store, persistor } = configureStore();
injectStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <HashRouter>
        <RouterApp />
      </HashRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);