// import Axios from 'axios';
// const { data } = await Axios.get('/api/products');

//User Actions
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  DOMAIN,
  USER_REGISTER_FAIL,
} from '../constants';
import axios from 'axios';

export const loginUser = (obj, history) => {
  return async (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });
    try {
      const { data } = await axios.post(`${DOMAIN}/api/login`, { ...obj });
      if (data.status) {
        const userObj = { info: data.data.user, token: data.data.token };
        localStorage.setItem('userData', JSON.stringify(userObj));
        dispatch({ type: USER_LOGIN_SUCCESS, payload: userObj });
        history.push('/planner');
      } else {
        dispatch({ type: USER_LOGIN_FAIL, payload: data.message });
      }
    } catch (e) {
      dispatch({ type: USER_LOGIN_FAIL, payload: e.message });
    }
  };
};

export const registerUser = (obj, history) => {
  return async (dispatch) => {
    dispatch({ type: USER_REGISTER_REQUEST });
    try {
      const { data } = await axios.post(`${DOMAIN}/api/register`, {
        ...obj,
        firstname: '',
        lastname: '',
        type: 0,
      });
      console.log(data);
      if (data.status) {
        dispatch({ type: USER_REGISTER_SUCCESS, payload: data.message });
        history.push('/login');
      } else {
        dispatch({ type: USER_REGISTER_FAIL, payload: data.message });
      }
    } catch (e) {
      dispatch({ type: USER_REGISTER_FAIL, payload: e.message });
    }
  };
};
