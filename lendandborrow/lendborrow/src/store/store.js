import { createSlice, configureStore } from "@reduxjs/toolkit";

// import { createStore } from "redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    user: {
      firstname: "manjunath",
      lastname: "kalburgi",
      email: "kalburgimanjunath@gmail.com",
    },
  },
  reducers: {
    addUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
    },
    deleteUser: (state) => {
      state.value -= 1;
    },
  },
});

export const { addUser, deleteUser } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
