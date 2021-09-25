import {
  GET_ALL_USERS,
  GET_ALL_USERS_FAIL,
  GET_ALL_USERS_SUCCESS,
  GET_USER,
  GET_USER_FAIL,
  GET_USER_SUCCESS,
} from "../actionTypes";

const initialState = {
  isLoading: null,
  users: [],
  error: null,
  user:{}
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER:
    case GET_ALL_USERS:
      return { ...state, isLoading: true };

    case GET_ALL_USERS_SUCCESS:
      return { ...state, isLoading: false, users: payload };
    
    case GET_USER_SUCCESS:
        return {...state,isLoading:false,user:payload}

    case GET_USER_FAIL:
    case GET_ALL_USERS_FAIL:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export default userReducer;
