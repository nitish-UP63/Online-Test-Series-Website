const initialState={};
const set_user_data=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_data" : return state=action.data;
        default : return state;
    }
}

export default set_user_data;