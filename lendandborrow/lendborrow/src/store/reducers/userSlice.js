import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { name: "Manjunath", email: "manjunathkalburgi@gmail.com" },
];

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: () => {},
    deleteUser: () => {},
  },
});
export const { addUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
