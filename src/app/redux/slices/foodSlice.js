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
      const result = state.foodsOfCart.find(
        (item) => item.id === action.payload.id
      );
      const { amounts, categoryName } = action.payload;

      // customized Amounts  data
      const newAmountsArrayData = amounts.map((data) => {
        if (data.name === categoryName) {
          return { ...data, quantity: 1, totalPrice: data.price, cart: true };
        } else {
          return { ...data, quantity: 0, totalPrice: 0, cart: false };
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
                return (
                  (data.quantity = data.quantity + 1),
                  (data.totalPrice = data.quantity * data.price),
                  (data.cart = true)
                );
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

    quantityUpdate: (state, action) => {
      state.foodsOfCart.map((item) => {
        // find real object of foodsOfCart state
        if (item.id === action.payload.id) {
          item.amounts.map((data) => {
            // find real category food
            if (data.name === action.payload.categoryName) {
              if (action.payload.type === "decrement" && data.quantity === 1) {
                return;
              }
              // increment handler
              if (action.payload.type === "increment") {
                return (
                  (data.quantity = data.quantity + 1),
                  (data.totalPrice = data.quantity * data.price)
                );
              }

              // decrement handler
              if (action.payload.type === "decrement") {
                return (
                  (data.quantity = data.quantity - 1),
                  (data.totalPrice = data.quantity * data.price)
                );
              }
              return false;
            } else {
              return data;
            }
          });
        } else {
          return item;
        }
      });
    },

    cartCategoryDelete: (state, action) => {
      state.foodsOfCart.map((item) => {
        // find real object of foodsOfCart state
        if (item.id === action.payload.id) {
          item.amounts.map((data) => {
            // find real category food
            if (data.name === action.payload.categoryName) {
              return (data.cart = false);
            } else {
              return false;
            }
          });
        } else {
          return item;
        }
      });
    },

    cartDelete: (state, action) => {
      const result = state.foodsOfCart.filter((item) => item.id !== action.payload);
      state.foodsOfCart = result ;
    },

    // ...
  },
});

// All reducers Global export
export const { addFoodToCart, quantityUpdate, cartCategoryDelete, cartDelete } =
  foodSlice.actions;

// Selectors - State
export const selectFoods = (state) => state.foodsOfCart.foodsOfCart;

export default foodSlice.reducer;
