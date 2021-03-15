// import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// export const getCarritoProfile = createAsyncThunk(
//   "GET_CARRITO_PROFILE",
//   (id) => {
//     return axios
//       .get(`http://localhost:8000/api/cart/historial/cart/${id}`)
//       .then((res) => {
//         return res.data;
//       });
//   }
// );

// const carritoProfileReducer = createReducer([], {
//   [getCarritoProfile.fulfilled]: (state, action) => action.payload,
// });

// export default carritoProfileReducer;
