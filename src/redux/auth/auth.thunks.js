import { redirect } from "react-router-dom";
import api from "../../api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import global from "../global";

const register = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.request.post("/auth/register", data);
      dispatch(
        global.action.showNotification({
          message: "register success",
          status: "success",
        })
      );
      return res.data;
    } catch (error) {
      dispatch(
        global.action.showNotification({
          message: "register failed",
          status: "error",
        })
      );
      return rejectWithValue(error.response.data);
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await api.request.post("/auth/login", data);
      dispatch(
        global.action.showNotification({
          message: "login success",
          status: "success",
        })
      );
      return res.data;
    } catch (error) {
      dispatch(
        global.action.showNotification({
          message: "login failed",
          status: "error",
        })
      );
      return rejectWithValue(error.response.data);
    }
  }
);
export { login, register };

export default {
  register,
  login,
};
