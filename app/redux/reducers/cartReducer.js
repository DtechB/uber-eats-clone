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
      if (action.payload.checkboxValue) {
        newState.selectedItems = {
          items: [...newState.selectedItems.items, action.payload],
          resturantName: action.payload.resturantName,
        };
      } else {
        console.log("first");
        newState.selectedItems = {
          items: [
            ...newState.selectedItems.items.filter(
              (item) => item.name !== action.payload.name
            ),
          ],
          resturantName: action.payload.resturantName,
        };
      }
      console.log(newState);
      return newState;
    },
  },
});

export const { cartAdded } = slice.actions;

export default slice.reducer;
