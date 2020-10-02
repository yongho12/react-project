import { combineReducers } from "redux";
import caseReducer from "./caseReducer";

export default combineReducers({
  cases: caseReducer,
  total: caseReducer, 
  newCase: caseReducer,
});
