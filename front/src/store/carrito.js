import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarrito = createAsyncThunk("SEARCH", (carrito) => {
  return axios.get(``).then((res) => res.data);
});

export const postCarrito = createAsyncThunk("POST", (carrito) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then((product) => product.data);
});

export const deleteCarrito = createAsyncThunk("DELETE", (carrito) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const carritoReducer = createReducer([], {
  [getCarrito.fulfilled]: (state, action) => action.payload,
  [postCarrito.fulfilled]: (state, action) => [...state, action.payload],
});

export default carritoReducer;
