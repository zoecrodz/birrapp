import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCategories = createAsyncThunk("SEARCH", (categories) => {
  return axios.get(`http://localhost:8000/api/category`).then((res) => res.data);
});

export const postCategories = createAsyncThunk("POST", (categories) => {
  return axios({
    method: "post",
    url: "?",
    data: {},
  }).then(categoria => categoria);
});

export const deleteCategories = createAsyncThunk("DELETE", (categories) => {
  return axios({
    method: "delete",
    url: "?",
    data: {},
  }).then(categoria => categoria);
});

const categoriesReducer = createReducer([], {
  [getCategories.fulfilled]: (state, action) => action.payload,
  [postCategories.fulfilled]: (state, action) => [...state, action.payload],
});

export default categoriesReducer;
