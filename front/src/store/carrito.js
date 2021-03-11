import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//  FALTA UN GET A CARRITOS

export const getCarrito = createAsyncThunk("SEARCH_CART", (carrito) => {
  return axios.get(``).then((res) => res.data);
});

// --------- Revisar como se crea el carrito en la ruta del backEnd -----------
export const postCarrito = createAsyncThunk("POST", (carrito) => {
  const paymentMethod = carrito.paymentMethod;
  const table = carrito.table;
  const state = carrito.state;
  return axios({
    method: "post",
    url: `/api/cart/${carrito.id}`,
    data: { paymentMethod, table, state },
  }).then((product) => product.data);
});

export const deleteCarrito = createAsyncThunk("DELETE", (id) => {
  return axios({
    method: "delete",
    url: `/api/cart/${id}`,
  }).then((product) => product.data);
});
//verficar si hay que agregar al estado
const carritoReducer = createReducer([], {
  [getCarrito.fulfilled]: (state, action) => action.payload,
  [postCarrito.fulfilled]: (state, action) => [...state, action.payload],
});

export default carritoReducer;
