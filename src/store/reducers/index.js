import reducerFn, { reducerFnEight, reducerFnFive, reducerFnFour, reducerFnSeven, reducerFnSix, reducerFnthree, reducerFntwo } from "./upDown";


import { combineReducers } from "redux";
const RootReducer = combineReducers({
  amount: reducerFn,
  choose: reducerFntwo,
  loginOut: reducerFnthree,
  loading: reducerFnFour,
  prdata: reducerFnFive,
  allprdata: reducerFnSix,
  organic:reducerFnSeven,
  getcountry: reducerFnEight

});
export default RootReducer;

