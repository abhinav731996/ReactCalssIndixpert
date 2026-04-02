import { configureStore } from "@reduxjs/toolkit";
import { wishlistSlice } from "./slices/WishlistSlice";
import { cartSlice } from "./slices/CartSlice";


export const store = configureStore({
//   reducer : { .....list of all reducers......  },
    reducer : {
        wishlist : wishlistSlice.reducer,
        cart : cartSlice.reducer 
    }
})