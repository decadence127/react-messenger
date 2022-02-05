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
  status: [],
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
    refreshSuccess(state, action) {
      state.userData = action.payload;
      state.userData.isAuth = true;
      localStorage.setItem("token", state.userData.accessToken);
      state.isLoading = false;
    },
    registrationFailed(state, action) {
      Array.isArray(action.payload)
        ? (state.errors = action.payload)
        : state.errors.push(action.payload);
      state.isLoading = false;
    },
    registrationSuccess(state, action) {
      state.status.push(action.payload);
      state.isLoading = false;
    },
    cleanInfo(state) {
      state.errors = [];
      state.status = [];
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
  registrationFailed,
  registrationSuccess,
  cleanInfo,
} = userSlice.actions;

export default userSlice.reducer;
