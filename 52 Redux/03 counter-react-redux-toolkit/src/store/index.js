import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter";
import privacySlice from "./privacy";

//YE REFERENCE K LIYE H, ALAG SE FOLDER MAI SAME CHEEJ LIKHI H
// const counterSlice = createSlice({
//   name: "counter",
//   initialState: { counterVal: 0 },
//   reducers: {
//     increment: (state) => {
//       state.counterVal += 1;
//     },
//     decrement: (state) => {
//       state.counterVal--;
//     },
//     add: (state, action) => {
//       state.counterVal += Number(action.payload.num);
//     },
//     subtract: (state, action) => {
//       state.counterVal -= Number(action.payload);
//     },
//   },
// });

// const privacySlice = createSlice({
//   name: "privacy",
//   initialState: false,
//   reducers: {
//     toggle: (state) => {
//       return (state = !state);
//     },
//   },
// });

const counterStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    privacy: privacySlice.reducer,
  },
});

// export const counterActions = counterSlice.actions;
// export const privacyActions = privacySlice.actions;

export default counterStore;
