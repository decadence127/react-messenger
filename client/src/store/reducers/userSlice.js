import { createSlice } from "@reduxjs/toolkit";

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
      localStorage.removeItem("token");
      state.userData = initialState.userData;
      state.userData.isAuth = false;
      state.isLoading = false;
    },
    logoutFailed(state, action) {
      state.errors.push(action.payload);
      state.isLoading = false;
    },
    refreshSuccess(state, action) {
      state.userData = action.payload;
      state.userData.isAuth = true;
      localStorage.setItem("token", state.userData.accessToken);
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
  refreshSuccess,
} = userSlice.actions;

export default userSlice.reducer;
