//User Actions
import { 
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS , USER_LOGIN_FAIL , USER_LOGOUT_SUCCESS

} from "../constants";


export const setUpUser = ({ provider, address, status }) => {
    return async (dispatch) => {
      dispatch({ type: USER_LOGIN_REQUEST });
      if (status === 'login') {
        localStorage.setItem('user_dex', JSON.stringify({ address }));
        dispatch({
          type: USER_LOGIN_SUCCESS,
          payload: { address, provider },
        });
      } else if (status === 'logout') {
        dispatch({
          type: USER_LOGOUT_SUCCESS,
        });
        localStorage.removeItem('user_dex');
      }
    };
  };