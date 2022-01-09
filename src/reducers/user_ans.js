const initialState = [];
var temp = [];
const set_user_ans = (state = initialState, action) => {
  switch (action.type) {
    case "User_ans": {
      temp = [...state];
      var bool = true;
      for (let i = 0; i < temp.length; i++) {
        if (temp[i].id === action.id) {
          bool = false;
          temp[i].id = action.id;
          temp[i].val = action.ans;
          temp[i].ansID = action.ansID;
          temp[i].checked = action.checked ? action.checked : false;
        }
      }
      if (bool) {
        temp = [
          ...temp,
          {
            id: action.id,
            val: action.ans,
            ansID: action.ansID,
            checked: action.checked ? action.checked : false,
          },
        ];
      }

      return (state = [...temp]);
    }
    //    return state=[...state, ( temp.map((item)=>{
    //  let boolean=true;
    // if(item.id===action.id){
    //     // boolean=false;
    //  return {...item, id: action.id, val: action.ans, ansID: action.ansID, checked: action.checked ? action.checked : false }
    // }else{
    //     return  {id: action.id,val: action.ans, ansID: action.ansID, checked: action.checked ? action.checked : false  }}
    // }
    //   ))
    //];
    //     state.map((item)=>{
    //       if(item.id===action.id){
    //        return {...item, id: action.id, val: action.ans, ansID: action.ansID, checked: action.checked ? action.checked : false }
    //       }else{
    //           return  {id: action.id,val: action.ans, ansID: action.ansID, checked: action.checked ? action.checked : false  }}
    //       }
    //  )
    case "Clear_ans" :
        {
             temp= action.arr;
             state=[...temp];
             return state;
        }
    default:
      return state;
  }
};


export default set_user_ans;
