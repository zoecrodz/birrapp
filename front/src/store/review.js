import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const writeReview = createAsyncThunk("CREATE_REVIEW", (data) => {
    return axios
    .post(`http://localhost:8000/api/reviews/${data.productId}`, data)
    .then(res => res.data)
  });

  const reviewReducer = createReducer({}, {
    [writeReview.fulfilled]: (state, action) => action.payload
  });
  
export default reviewReducer;