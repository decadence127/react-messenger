import { createSlice } from "@reduxjs/toolkit";
import AuthService from "../../http/Services/AuthService";

const initialState = {
  userData: {
    refreshToken: "",
    accessToken: "",
    isAuth: false,
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
  },
});
export const { loginSuccess, startLoading, loginFailed } = userSlice.actions;

export const loginUser = (email, pass) => async (dispatch) => {
  dispatch(startLoading());
  try {
    const response = await AuthService.login(email, pass);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    dispatch(loginFailed(e.response.data.message));
  }
};

export default userSlice.reducer;
