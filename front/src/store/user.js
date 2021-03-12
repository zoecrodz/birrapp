import { createReducer, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

/** para hacer un pedido get con jwt a veces es necesario 
 * enviar un header de autentificacion para autorizar 
 */



export const getUser = createAsyncThunk("SEARCH_SINGLE_USER", () => {
  return axios
  .get(`http://localhost:8000/api/me`, {headers: {"Authorization": `token ${localStorage.getItem("token")}`}})
  .then((res) => res.data) 
});
 
export const logOutUser = createAction("SET_LOG_OUT"); 



const userReducer = createReducer({}, {
    [getUser.fulfilled]: (state, action) => action.payload,
    [logOutUser]: (state, action) => action.payload
  });
  
  export default userReducer;