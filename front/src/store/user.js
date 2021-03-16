import {
  createReducer,
  createAsyncThunk,
  createAction,
} from "@reduxjs/toolkit";
import axios from "axios";

/** para hacer un pedido get con jwt a veces es necesario
 * enviar un header de autentificacion para autorizar
 */

export const registerUser = createAsyncThunk("CREATE_USER", (user) => {
  return axios
    .post("http://localhost:8000/api/register", user)
    .then((res) => res.data)
    .then((usuario) => usuario);
});

export const loginUser = createAsyncThunk("LOGIN_USER", (user) => {
  return axios({
    method: "post",
    url: "http://localhost:8000/api/login",
    data: user,
  })
    .then((user) => localStorage.setItem("token", user.data))
    .catch();
});

export const getUser = createAsyncThunk("SEARCH_SINGLE_USER", () => {
  return axios
  .get(`http://localhost:8000/api/me`, {headers: {"Authorization": `token ${localStorage.getItem("token")}`}})
  .then((res) => res.data) 
});

export const logOutUser = createAction("SET_LOG_OUT");

const userReducer = createReducer(
  {},
  {
    [registerUser.fulfilled]: (state, action) => action.payload,
    [loginUser.fulfilled]: (state, action) => action.payload,
    [getUser.fulfilled]: (state, action) => action.payload,
    [logOutUser]: (state, action) => action.payload,
  });
  
  export default userReducer;
