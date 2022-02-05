import AuthService from "../../http/Services/AuthService";
import {
  startLoading,
  loginSuccess,
  loginFailed,
  logoutFailed,
  logoutSuccess,
  refreshSuccess,
} from "./userSlice";

export const loginUser = (email, pass) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.login(email, pass);
    console.log(response);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    console.log(e);
    dispatch(loginFailed(e.response.data.message));
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.logout();
    console.log(response);
    dispatch(logoutSuccess());
  } catch (e) {
    console.log(e);
    dispatch(logoutFailed(e.response.data.message));
  }
};

export const validateUser = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.validateAuth();
    dispatch(refreshSuccess(response.data));
  } catch (e) {
    console.log(e);
  }
};
