import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
// import AppLayout from './src/app';
import AppNavigatorWithState from './src/app-navigator-with-state';

class App extends Component {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppNavigatorWithState />
        </PersistGate>
      </Provider>
    );
  }
}

export default App


