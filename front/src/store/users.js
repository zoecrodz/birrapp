import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ----------Falta el Get--------
export const getUsers = createAsyncThunk("SEARCH", (users) => {
  return axios.get(`/`).then((res) => res.data);
});

export const registerUser = createAsyncThunk("CREATE_USER", (user) => {
  const firstName = user.firstName;
  const lastName = user.lastName;
  const email = user.email;
  const password = user.password;
  return axios({
    method: "post",
    url: "/api/register",
    data: { firstName, lastName, email, password },
  }).then((product) => product.data);
});

export const loginUser = createAsyncThunk("LOGIN_USER", (user) => {
  const email = user.email;
  const password = user.password;
  return axios({
    method: "post",
    url: "/api/login",
    data: { email, password },
  }).then((user) => user);
});

//----------Falta el Delete--------
export const deleteUsers = createAsyncThunk("DELETE", (id) => {
  return axios({
    method: "delete",
    url: `/api/users/${id}`,
  }).then((product) => product.data);
});

// ----------Revisar----------
export const updateUsers = createAsyncThunk("UPDATE", (data) => {
  return axios({
    method: "put",
    url: `/api/me`,
    data: { data },
  });
});

//verficar si hay que agregar al estado
const usersReducer = createReducer([], {
  [getUsers.fulfilled]: (state, action) => action.payload,
  [registerUser.fulfilled]: (state, action) => [...state, action.payload],
  [loginUser.fulfilled]: (state, action) => action.payload,
});

export default usersReducer;
