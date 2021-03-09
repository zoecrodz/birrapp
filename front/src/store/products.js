import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("SEARCH", (products) => {
  return axios.get(``).then((res) => res.data);
});

export const postProducts = createAsyncThunk("POST", (products) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then((product) => product.data);
});

export const deleteProducts = createAsyncThunk("DELETE", (products) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const productsReducer = createReducer([], {
  [getProducts.fulfilled]: (state, action) => action.payload,
  [postProducts.fulfilled]: (state, action) => [...state, action.payload],
});

export default productsReducer;
