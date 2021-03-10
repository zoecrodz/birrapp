import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("SEARCH", (product) => {
  return axios.get(`/api/product/${product.id}`).then((res) => res.data);
});

export const updateProduct = createAsyncThunk("PUT", (product) => {
  return axios({
    method: "put",
    url: `/api/product/${product.id}`,
    data: { product }, //-------revisar-------
  }).then((product) => product.data);
});

export const deleteProduct = createAsyncThunk("DELETE", (id) => {
  return axios({
    method: "delete",
    url: `/api/product/${id}`,
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const singleProductReducer = createReducer([], {
  [getProduct.fulfilled]: (state, action) => action.payload,
  [updateProduct.fulfilled]: (state, action) => [...state, action.payload],
});

export default singleProductReducer;
