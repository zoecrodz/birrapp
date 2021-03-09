import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getItems = createAsyncThunk("SEARCH", (items) => {
  return axios.get(``).then((res) => res.data);
});

export const postItems = createAsyncThunk("POST", (items) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then((product) => product.data);
});

export const deleteItems = createAsyncThunk("DELETE", (items) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const itemsReducer = createReducer([], {
  [getItems.fulfilled]: (state, action) => action.payload,
  [postItems.fulfilled]: (state, action) => [...state, action.payload],
});

export default itemsReducer;
