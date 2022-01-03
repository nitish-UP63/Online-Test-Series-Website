export const Setuserstate = state => {
    return {type: 'User_state', state: state};
  };

export const Setuserdata = data => {
    return {type: 'User_data', data: data};
  };