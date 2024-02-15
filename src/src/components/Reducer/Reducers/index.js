// reducers/index.js
import {combineReducers} from 'redux';
import cartReducer from '../Reducers/CartReducer';
import {dataSlice} from '../../Redux-Toolkit/Features/ReducerSlice';

const rootReducer = combineReducers({
  cart: cartReducer,
  data: dataSlice.reducer,
});

export default rootReducer;
