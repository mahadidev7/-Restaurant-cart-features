/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  foodsOfCart: [],
};

export const foodSlice = createSlice({
  name: "foodsOfCart",
  initialState,
  reducers: {
    // this addFoodToCart reducers creates a  new Object of the foodsOfCart state
    addFoodToCart: (state, action) => {
      const result = state.foodsOfCart.find((item) => item.id === action.payload.id);
      const { amounts, categoryName } = action.payload;

      // customized Amounts  data
      const newAmountsArrayData = amounts.map((data) => {
        if (data.name === categoryName) {
          return { ...data, quantity: 1, totalPrice: data.price };
        } else {
          return { ...data, quantity: 0, totalPrice: data.price };
        }
      });

      // customized a new data
      const newData = {
        ...action.payload,
        amounts: newAmountsArrayData,
      };

      if (!result) {
        // firstly new data push
        state.foodsOfCart = [...state.foodsOfCart, newData];
      } else {
        state.foodsOfCart.map((item) => {
          // find real object of foodsOfCart state
          if (item.id === action.payload.id) {
            item.amounts.map((data) => {
              // find real category food
              if (data.name === categoryName) {
                return (data.quantity = data.quantity + 1);
              } else {
                return data;
              }
            });
          } else {
            return item;
          }
        });
      }
    },

    // ... 
  },
});

// All reducers Global export
export const { addFoodToCart } = foodSlice.actions;

// Selectors - State
export const selectFoods = (state) => state.foodsOfCart.foodsOfCart;

export default foodSlice.reducer;
