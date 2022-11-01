// configure aqui sua store
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
// import reducer from './reducers';
import userReducer from './reducers/user';
import walletReducer from './reducers/wallet';

const store = createStore(combineReducers({
  userInfo: userReducer,
  walletInfo: walletReducer,
}), composeWithDevTools());

if (window.Cypress) {
  window.store = store;
}

export default store;
