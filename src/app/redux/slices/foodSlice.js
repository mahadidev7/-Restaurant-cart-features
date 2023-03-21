/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import MenuDummyData from "../../data/MenuDummyData";

const initialState = {
  allFoodData: MenuDummyData,
};

export const foodSlice = createSlice({
  name: "allFoodData",
  initialState,
  reducers: {
    // this addFoodToCart reducers creates a  new Object of the foodsOfCart state
    disabledBtnUpdate: (state, action) => {
      
    },
    // ...
  },
});

// All reducers Global export
export const {disabledBtnUpdate} = foodSlice.actions;

// Selectors - State
export const selectAllFoodData = (state) => state.allFoodData.allFoodData;

export default foodSlice.reducer;
