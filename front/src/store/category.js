import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getCategory = createAsyncThunk("SEARCH_CATEGORY", (id) => {
  return axios.get(`http://localhost:8000/api/category/${id}`).then((res) => res.data);
});

const categoryReducer = createReducer({}, {
  [getCategory.fulfilled]: (state, action) => action.payload,
});

export default categoryReducer;
