import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn: (state, action) => {},
  },
});
