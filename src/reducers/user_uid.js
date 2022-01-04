const initialState='';
const set_user_id=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_id" : return state=action.id;
        default : return state;
    }
}

export default set_user_id;