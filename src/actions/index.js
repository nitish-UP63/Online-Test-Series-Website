export const Setuserstate = state => {
    return {type: 'User_state', state: state};
  };

export const Setuserdata = data => {
    return {type: 'User_data', data: data};
  };

  export const Setuid = id => {
    return {type: 'User_id', id: id};
  };

  export const Setscore = score => {
    return {type: 'User_score', score: score};
  };

  export const Setuserans = (id, ansID,  ans, checked) => {
    return {type: 'User_ans', ans: ans, ansID: ansID, id: id, checked: checked};
  };