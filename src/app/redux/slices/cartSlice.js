/* eslint-disable no-unused-expressions */
/* eslint-disable array-callback-return */
import { createSlice } from "@reduxjs/toolkit";
import MenuDummyData from "../../data/MenuDummyData";

const initialState = {
  foodsOfCartData: [],
  allFoodData: MenuDummyData,
  orderHistoryData: [],
};

export const cartSlice = createSlice({
  name: "foodsOfCart",
  initialState,
  reducers: {
    // this addFoodToCart reducers creates a  new Object of the foodsOfCartData state
    // add to cart 
    addFoodToCart: (state, action) => {
      // Get the current item
      const result = state.foodsOfCartData.find(
        (item) => item.id === action.payload.id
      );

      if (!result) {
        // New data push
        state.foodsOfCartData = [...state.foodsOfCartData, action.payload];
        return;
      } else {
        state.foodsOfCartData.map((item) => {
          // find real item from foodsOfCartData state
          if (item.id === action.payload.id) {
            let res = item.amounts.map(
              (value) => value.name === action.payload.amounts[0].name
            );
            let result = res.filter(Boolean);
            // if food category price is not available - then add it
            if (!result[0]) {
              item.amounts = [...item.amounts, ...action.payload.amounts];
              return true;
            }
            // if food is  available - then warning it
            alert("This Product is already Added");
            return false;
          } else {
            return item;
          }
        });
        return;
      }
    },
    // food price quantity update
    quantityUpdate: (state, action) => {
      state.foodsOfCartData.map((item) => {
        // find real object of foodsOfCartData state
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
    // Delete a category like:- cow, chicken,
    cartCategoryDelete: (state, action) => {
      state.foodsOfCartData.map((item) => {
        // find real object of foodsOfCartData state
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
    // Delete food item
    cartDelete: (state, action) => {
      const result = state.foodsOfCartData.filter(
        (item) => item.id !== action.payload
      );
      state.foodsOfCartData = result;
    },
    // Category food active for shop. like: cow, chicken
    goToShop: (state, action) => {
      state.foodsOfCartData.map((item) => {
        // find real object of foodsOfCartData state
        if (item.id === action.payload.cartId) {
          // shopping object key value is toggle for ready to shop item
          item.amounts.map((data) => {
            if (data.name === action.payload.categoryName) {
              data.shopping = !data.shopping;
            }
          });
          // object key value is the categoryShop is updated is toggle for ready to shop item
          if (action.payload.type === "add") {
            return (item.categoryShop = item.categoryShop + 1);
          }
          if (action.payload.type === "remove") {
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

    amountsTotalCounter: (state) => {
      state.foodsOfCartData.map((item) => {
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
    // Successful order 
    orderHistoryCollect: (state, action) => {
      state.orderHistoryData = [...state.orderHistoryData, action.payload];
    },
    // Delete order history for cart
    deleteSuccessOrderFromCart: (state) => {
      state.foodsOfCartData.map((item) => {
        // delete all proceed items
        let allAmounts = (item.amounts = item.amounts.filter(
          (amountValue) => amountValue.shopping !== true
        ));
        // categoryShop is decrements because categoryShop option is connected to the proceed data
        allAmounts.map((v) => {
          if (item.categoryShop === 0) {
            return (item.categoryShop = 0);
          }
          return (item.categoryShop = item.categoryShop - 1);
        });
        return item;
      });
    },
    // Select all cart Toggle
    selectAllCart: (state, action) => {
      state.foodsOfCartData.map((item) => {
        item.categoryShop = 0
        item.amountsTotal = 0
        item.amounts.map(value => {
          if(action.payload.type === 'select'){
            value.shopping = true
            item.categoryShop = item.categoryShop + 1;
            item.amountsTotal = item.amountsTotal + value.totalPrice;
            return
          }
          value.shopping = false;
          return
        })
        return item;
      });
      return;
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
  orderHistoryCollect,
  deleteSuccessOrderFromCart,
  selectAllCart,
} = cartSlice.actions;

// Selectors - State
export const selectCarts = (state) => state.foodsOfCart.foodsOfCartData;
export const selectAllFoodData = (state) => state.foodsOfCart.allFoodData;
export const selectOrderHistoryData = (state) =>
  state.foodsOfCart.orderHistoryData;

export default cartSlice.reducer;
