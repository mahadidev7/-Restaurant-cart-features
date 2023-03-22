/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import MenuDummyData from "../../data/MenuDummyData";

const initialState = {
  foodsOfCart: [],
  allFoodData: MenuDummyData,
};

export const cartSlice = createSlice({
  name: "foodsOfCart",
  initialState,
  reducers: {
    // this addFoodToCart reducers creates a  new Object of the foodsOfCart state

    addFoodToCart: (state, action) => {
      const result = state.foodsOfCart.find(
        (item) => item.id === action.payload.id
      );

      if (!result) {
        // firstly new data push
        state.foodsOfCart = [...state.foodsOfCart, action.payload];
        return;
      } else {
        state.foodsOfCart.map((item) => {
          // find real object of foodsOfCart state
          if (item.id === action.payload.id) {
            item.amounts = [...item.amounts, ...action.payload.amounts];
          } else {
            return item;
          }
        });
        return;
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
        if (item.id === action.payload.cartId) {
          const result = item.amounts.filter(
            (item) => item.name !== action.payload.categoryName
          );
          item.amounts = result;
          item.categoryShop = item.categoryShop - 1;
          return true;
        } else {
          return item;
        }
      });
    },

    cartDelete: (state, action) => {
      const result = state.foodsOfCart.filter(
        (item) => item.id !== action.payload
      );
      state.foodsOfCart = result;
    },

    goToShop: (state, action) => {
      state.foodsOfCart.map((item) => {
        // find real object of foodsOfCart state
        if (item.id === action.payload.cartId) {
          item.amounts.map((data) => {
            if (data.name === action.payload.categoryName) {
              data.shopping = !data.shopping;
            }
          });
          if (action.payload.type === "increment") {
            item.categoryShop = item.categoryShop + 1;
          }
          if (action.payload.type === "decrement") {
            if (item.categoryShop === 0) {
              return (item.categoryShop = 0);
            }
            return (item.categoryShop = item.categoryShop - 1);
          }
        } else {
          return item;
        }
      });
    },

    amountsTotalCounter: (state, action) => {
      state.foodsOfCart.map((item) => {
        let resultTwo = item.amounts.map((data) => {
          if (data.shopping) {
            return data.totalPrice;
          }
          return 0;
        });
        let sum = resultTwo.reduce(function (accumulator, currentValue) {
          return accumulator + currentValue;
        }, 0);

        item.amountsTotal = sum;
      });
    },

    // ...
  },
});

// All reducers Global export
export const {
  addFoodToCart,
  quantityUpdate,
  cartCategoryDelete,
  cartDelete,
  goToShop,
  amountsTotalCounter,
} = cartSlice.actions;

// Selectors - State
export const selectCarts = (state) => state.foodsOfCart.foodsOfCart;
export const selectAllFoodData = (state) => state.foodsOfCart.allFoodData;

export default cartSlice.reducer;
