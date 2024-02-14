// reducers/index.js
import {combineReducers} from 'redux';
import cartReducer from '../Reducers/CartReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
