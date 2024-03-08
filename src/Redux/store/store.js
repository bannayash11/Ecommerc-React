import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from '../user/authReducer';
import { cartSlice } from "../app/features";
const rootReducer = combineReducers({
  auth: authReducer,
  allCart:cartSlice.reducer,
  // Add more reducers here if needed
});

const middleware = [thunk];

const store = createStore(rootReducer, applyMiddleware(...middleware));

export default store;


// import { configureStore } from "@reduxjs/toolkit";
// import { cartSlice } from "../app/features";
// import authReducer from "../user/authReducer";

// //old code
// export const store = configureStore({
//     reducer:{
       
//         auth:authReducer,
//     }
// })