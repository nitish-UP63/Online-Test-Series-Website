import set_user_data from "./userdata";
import set_user_state from "./userstate";
import set_user_id from "./user_uid";
import set_user_score from "./userscore";
import set_user_ans from "./user_ans";
import { combineReducers } from "redux";

const rootReducer= combineReducers({
     set_user_data, set_user_state, set_user_id, set_user_score, set_user_ans
})

export default rootReducer;