import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getOrders = createAsyncThunk("SEARCH_ORDERS", () => {
  return axios.get(`http://localhost:8000/api/cart`).then((res) => res.data);
});

//verficar si hay que agregar al estado
const ordersReducer = createReducer([], {
  [getOrders.fulfilled]: (state, action) => action.payload,
});

export default ordersReducer;