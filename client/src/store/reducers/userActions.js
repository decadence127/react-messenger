import AuthService from "../../http/Services/AuthService";
import {
  startLoading,
  loginSuccess,
  loginFailed,
  logoutFailed,
  logoutSuccess,
  refreshSuccess,
  registrationFailed,
  registrationSuccess,
  cleanInfo,
} from "./userSlice";

export const loginUser = (email, pass) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.login(email, pass);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    dispatch(loginFailed(e.response.data.message));
    setTimeout(function () {
      dispatch(cleanInfo());
    }, 5000);
  }
};

export const logoutUser = (id) => async (dispatch) => {
  dispatch(startLoading());
  try {
    dispatch(logoutSuccess());
    await AuthService.logout(id);
  } catch (e) {
    dispatch(logoutFailed(e.response.data.message));
  }
};

export const validateUser = () => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.validateAuth();
    dispatch(refreshSuccess(response.data));
  } catch (e) {
    console.error(e);
  }
};
export const registerUser =
  (email, pass, birthdate, name) => async (dispatch) => {
    dispatch(startLoading());
    try {
      await AuthService.registration(email, pass, birthdate, name);
      dispatch(registrationSuccess("You have been registered successfully"));
      setTimeout(function () {
        dispatch(cleanInfo());
      }, 5000);
    } catch (e) {
      dispatch(
        registrationFailed(
          e.response.data.errors.length > 0
            ? e.response.data.errors
            : e.response.data.message
        )
      );
      setTimeout(function () {
        dispatch(cleanInfo());
      }, 5000);
    }
  };
