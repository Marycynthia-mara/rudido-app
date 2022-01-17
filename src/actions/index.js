// import Axios from 'axios';
// const { data } = await Axios.get('/api/products');

//User Actions
import { 
    USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS , USER_LOGIN_FAIL , USER_LOGOUT_SUCCESS

} from "../constants";


export const loginUser = () => {
    return async (dispatch) => {
      
      dispatch({ type: USER_LOGIN_REQUEST });

   };
  };