import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getCarritosProfile = createAsyncThunk(
  "GET_CARRITOS_PROFILE",
  (id) => {
    return axios
      .get(`http://localhost:8000/api/cart/historial/${id}`)
      .then((res) => {
        return res.data;
      });
  }
);
const carritosProfileReducer = createReducer([], {
  [getCarritosProfile.fulfilled]: (state, action) => action.payload,
});

export default carritosProfileReducer;
