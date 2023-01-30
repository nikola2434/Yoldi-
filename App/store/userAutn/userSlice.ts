import { IInitialState } from "./user.interface";
import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage } from "@/App/utils/local-storage.utils";
import { login, logout, register } from "./userAction";

const initialState: IInitialState = {
  isLoading: false,
  key: getLocalStorage("key"),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.key = payload.value;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = false;
        state.key = null;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.key = payload.value;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = false;
        state.key = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.key = null;
      });
  },
});
