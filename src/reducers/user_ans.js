const initialState=[ ];
const set_user_ans=(state=initialState, action)=>{
    switch(action.type)
    {
        case "User_ans" : return state=[...state, {id: action.id,val: action.ans, ansID: action.ansID, checked: action.checked ? action.checked : false  }];
        default : return state;
    }
}

export default set_user_ans;