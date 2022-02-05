import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../http/Services/AuthService";

const initialState = {
  userData: {
    refreshToken: "",
    accessToken: "",
    isAuth: !!localStorage.getItem("token"),
    user: {
      userName: "",
      userEmail: "",
      userAge: 0,
    },
  },
  isLoading: false,
  errors: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading(state) {
      state.errors = [];
      state.isLoading = true;
    },
    loginFailed(state, action) {
      state.errors.push(action.payload);
      state.isLoading = false;
    },
    loginSuccess(state, action) {
      state.userData = action.payload;
      state.userData.isAuth = true;
      localStorage.setItem("token", state.userData.accessToken);
      state.isLoading = false;
    },
    logoutSuccess(state) {
      state.userData = initialState.userData;
      localStorage.removeItem("token");
      state.isLoading = false;
    },
    logoutFailed(state, action) {
      state.errors.push(action.payload);
      state.isLoading = false;
    },
  },
});
export const {
  loginSuccess,
  startLoading,
  loginFailed,
  logoutFailed,
  logoutSuccess,
} = userSlice.actions;

export const loginUser = (email, pass) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.login(email, pass);
    dispatch(loginSuccess(response.data));
  } catch (e) {
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
export default userSlice.reducer;
