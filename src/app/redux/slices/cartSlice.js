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

    addFoodToCart: (state, action) => {
      const result = state.foodsOfCartData.find(
        (item) => item.id === action.payload.id
      );

      if (!result) {
        // firstly new data push
        state.foodsOfCartData = [...state.foodsOfCartData, action.payload];
        return;
      } else {
        state.foodsOfCartData.map((item) => {
          // find real object of foodsOfCartData state
          if (item.id === action.payload.id) {
            let res = item.amounts.map(
              (value) => value.name === action.payload.amounts[0].name
            );
            let result = res.filter(Boolean);
            if (!result[0]) {
              item.amounts = [...item.amounts, ...action.payload.amounts];
              return true;
            }
            alert("This Product is already Added");
            return false;
          } else {
            return item;
          }
        });
        return;
      }
    },

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

    cartDelete: (state, action) => {
      const result = state.foodsOfCartData.filter(
        (item) => item.id !== action.payload
      );
      state.foodsOfCartData = result;
    },

    goToShop: (state, action) => {
      state.foodsOfCartData.map((item) => {
        // find real object of foodsOfCartData state
        if (item.id === action.payload.cartId) {
          item.amounts.map((data) => {
            if (data.name === action.payload.categoryName) {
              data.shopping = !data.shopping;
            }
          });
          if (action.payload.type === "add") {
            item.categoryShop = item.categoryShop + 1;
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

    orderHistoryCollect: (state, action) => {
      state.orderHistoryData = [...state.orderHistoryData, action.payload];
    },

    deleteSuccessOrderFromCart: (state) => {
      state.foodsOfCartData.map((item) => {
        let allAmounts = (item.amounts = item.amounts.filter(
          (amountValue) => amountValue.shopping !== true
        ));
        allAmounts.map((v) => {
          return (item.categoryShop = item.categoryShop - 1);
        });
        console.log('===allAmounts======');
        console.log(allAmounts, item.categoryShop);
        console.log('=======allAmounts=============');
        
        // return { ...item };
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
  orderHistoryCollect,
  deleteSuccessOrderFromCart,
} = cartSlice.actions;

// Selectors - State
export const selectCarts = (state) => state.foodsOfCart.foodsOfCartData;
export const selectAllFoodData = (state) => state.foodsOfCart.allFoodData;
export const selectOrderHistoryData = (state) =>
  state.foodsOfCart.orderHistoryData;

export default cartSlice.reducer;
