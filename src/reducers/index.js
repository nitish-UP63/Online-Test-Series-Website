import set_user_data from "./userdata";
import set_user_state from "./userstate";
import set_user_id from "./user_uid";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
     set_user_data, set_user_state, set_user_id
})

export default rootReducer;