import set_user_data from "./userdata";
import set_user_state from "./userstate";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
     set_user_data, set_user_state
})

export default rootReducer;