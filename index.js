/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import { Provider } from 'react-redux'
import configureStore from './app/store/configureStore'
import React, {Component} from 'react';
import App from './App'
const store = configureStore()

const RNRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)


AppRegistry.registerComponent(appName, () => RNRedux);
