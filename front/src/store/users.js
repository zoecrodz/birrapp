import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ----------Falta el Get--------
export const getUsers = createAsyncThunk("SEARCH_USERS", (users) => {
  return axios.get(`/`).then((res) => res.data);
});

export const registerUser = createAsyncThunk("CREATE_USER", (user) => {
  return axios
  .post("http://localhost:8000/api/register", user)
  .then(res => res.data)
  .then(usuario => usuario)
});

export const loginUser = createAsyncThunk("LOGIN_USER", (user) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/api/login",
    data: user,
  }).then(user => user);
});


//----------Falta el Delete--------
export const deleteUsers = createAsyncThunk("DELETE", (id) => {
  return axios({
    method: "delete",
    url: `/api/users/${id}`,
  }).then(user => user);
});

// ----------Revisar----------
export const updateUsers = createAsyncThunk("UPDATE", (data) => {
  return axios({
    method: "put",
    url: `/api/me`, //esto no tiene que ver con /me xq es para el user en especifico 
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
