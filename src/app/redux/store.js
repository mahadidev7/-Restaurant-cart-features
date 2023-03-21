import { configureStore } from "@reduxjs/toolkit";
import CartFoodReducer from "./slices/cartSlice";
// import allFoodReducer from "./slices/foodSlice";

export const store = configureStore({
    reducer: {
        foodsOfCart: CartFoodReducer,
        // allFoodData: allFoodReducer,
    }
})