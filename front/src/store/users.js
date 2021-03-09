import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("SEARCH", (users) => {
  return axios.get(``).then((res) => res.data);
});

export const postUsers = createAsyncThunk("POST", (users) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then((product) => product.data);
});

export const deleteUsers = createAsyncThunk("DELETE", (users) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
  [postUsers.fulfilled]: (state, action) => [...state, action.payload],
});

export default usersReducer;
