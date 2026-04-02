import { createSlice } from "@reduxjs/toolkit";

// slice in thr redux is something like reducer in react
export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    userId: 1,
    wishlistItems: [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
      },
      {
        id: 2,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      },
      {
        id: 3,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
      },
    ],
  },
  reducers:{
    addToWishlist: (state, action) => {
        // console.log("this is addishlist action");
        const { payload } = action
        const newItem = {
            id: payload.id,
            title: payload.title,
            thumbnail: payload.thumbnail,
        }
        state.wishlistItems = [...state.wishlistItems , newItem]
    },

    removeFromWishlist: (state, action) => {
        // console.log("action" + JSON.stringify(action));
        state.wishlistItems = state.wishlistItems.filter((product) => product.id !== action.payload)
        
    }
  }
});

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions;
export default wishlistSlice.reducer;