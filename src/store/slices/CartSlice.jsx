import { createSlice } from "@reduxjs/toolkit";

// slice in thr redux is something like reducer in react
export const cartSlice = createSlice({
  name: "cart",
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
    addToCart: (state, action) => {
        console.log("this is addToCart action");
        
    }
  }
});

export const {addToCart} = cartSlice.actions;
export default cartSlice.reducer;