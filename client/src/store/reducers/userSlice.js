import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {
    userName: "",
    userEmail: "",
    userAge: 0,
  },
  isLoading: false,
  error: [],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, action) {
      state.userData.userName = action.payload;
    },
  },
});

export default userSlice.reducer;
