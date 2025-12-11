import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    addText: () => {
      return null
    }
  }
});

export const { addText } = searchSlice.actions
export default searchSlice.reducer
