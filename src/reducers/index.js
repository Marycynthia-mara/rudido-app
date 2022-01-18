//User reducer
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../constants';

export const userAccountReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, type: 'register', message: 'Processing...' };
    case USER_REGISTER_SUCCESS:
      return { loading: false, type: 'register', message:action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, type: 'register', message: action.payload , error : true };

      
      case USER_LOGIN_REQUEST:
        return { loading: true, type: 'login', message: 'Processing...' };
      case USER_LOGIN_SUCCESS:
        return { loading: false, type: 'login', message:"", ...action.payload , isSignedIn : true };
      case USER_LOGIN_FAIL:
        return { loading: false, type: 'login', message: action.payload , error : true };
    case USER_LOGOUT_SUCCESS:
      return {};
    default:
      return state;
  }
};
