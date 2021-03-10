import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("SEARCH", (categories) => {
  return axios.get(``).then((res) => res.data);
});

export const postCategories = createAsyncThunk("POST", (categories) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then((product) => product.data);
});

export const deleteCategories = createAsyncThunk("DELETE", (categories) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
  [postCategories.fulfilled]: (state, action) => [...state, action.payload],
});

export default categoriesReducer;
