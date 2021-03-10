import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const getItems = createAsyncThunk("SEARCH", (items) => {
//   return axios.get(``).then((res) => res.data);
// });

// export const postItems = createAsyncThunk("POST", (items) => {});

// export const deleteItems = createAsyncThunk("DELETE", (id) => {});

//verficar si hay que agregar al estado

const itemsReducer = createReducer([], {
  // [getItems.fulfilled]: (state, action) => action.payload,
  // [postItems.fulfilled]: (state, action) => [...state, action.payload],
});

export default itemsReducer;

//--------  REVISAR!!!! --------- //
