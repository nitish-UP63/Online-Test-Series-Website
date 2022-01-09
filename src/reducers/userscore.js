const initialState=0;
const set_user_score=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_score" : return state=action.score;
        default : return state;
    }
}

export default set_user_score;