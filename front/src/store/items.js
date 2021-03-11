import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const deleteItemFromCarrito = createAsyncThunk(
  "DELETE_ITEM_FROM_CARRITO",
  (ids) => {
    const { productId, cartId } = ids;
    console.log("ids: ", productId, cartId);
    return axios
      .delete(`http://localhost:8000/api/items/${productId}/${cartId}`)
      .catch(() => console.log("error"));
  }
);

export const getItemFromCarrito = createAsyncThunk(
  "GET_ITEM_FROM_CARRITO",
  (ids) => {
    const { productId, cartId } = ids;
    return axios
      .get(`http://localhost:8000/api/items/${productId}/${cartId}`)
      .then((res) => res.data);
  }
);

// export const postItems = createAsyncThunk("POST", (items) => {});

// export const deleteItems = createAsyncThunk("DELETE", (id) => {});

//verficar si hay que agregar al estado

const itemsReducer = createReducer([], {
  [deleteItemFromCarrito.fulfilled]: (state, action) => action.payload,
  [getItemFromCarrito.fulfilled]: (state, action) => action.payload,
});

export default itemsReducer;

//--------  REVISAR!!!! --------- //
