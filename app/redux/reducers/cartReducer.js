import { createSlice } from "@reduxjs/toolkit";

let defaultState = {
  selectedItems: { items: [], resturantName: "" },
};

const slice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    cartAdded: (state, action) => {
      let newState = { ...state };
      newState.selectedItems = {
        items: [...newState.selectedItems.items, action.payload],
        resturantName: action.payload.resturantName,
      };
      return newState;
    },
  },
});

export const { cartAdded } = slice.actions;

export default slice.reducer;
