const initialState= false;
const set_user_state=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_state" : return state=action.state;
        default : return state;
    }
}

export default set_user_state;