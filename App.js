/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';

import Loading from './src/sections/components/loading';
// import AppLayout from './src/app'
import AppNavigatorWithState from './src/app-navigator-with-state'

// console.disableYellowBox = true
class App extends Component {
  // state = {
  //   suggestionList: [],
  //   CategoryList: [],
  // }
  render() {
    return (
      <Provider
        store={store}
      >
        <PersistGate
          loading={<Loading/>}
          persistor={persistor}
        >
        {/* <AppLayout/>           */}
        <AppNavigatorWithState/>
        </PersistGate>
      </Provider>

    );
  }
}

export default App
