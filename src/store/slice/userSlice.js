import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ActionButton from "antd/lib/modal/ActionButton";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    users: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { setUsers } = UserSlice.actions;
export default UserSlice.reducer;
