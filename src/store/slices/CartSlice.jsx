import { createSlice } from "@reduxjs/toolkit";

// slice in thr redux is something like reducer in react
export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    userId: 1,
    cartItems: [
      {
        id: 1,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
        category: "xyz",
        price: 10,
        quentity: 0,
        totalPirce: 0,
      },
      {
        id: 2,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        category: "xyz",
        price: 10,
        quentity: 0,
        totalPirce: 0,
      },
    ],
    totalQuantities: 0,
    cartTotal: 0,
    shippingCost: 0,
    tax: 18, // its in percentage format
    appliedCoupon: "",
    discountPercent: 0,
    dicount: 0,
    orderTotal: 0,
    couponCodes: [
      { code: "ABHI5", percent: 5 },
      { code: "ABHI10", percent: 10 },
    ],
  },
  reducers: {
    addToCart: (state, action) => {
      const { payload } = action;
      const newItem = {
        id: payload.id,
        title: payload.title,
        thumbnail: payload.thumbnail,
        category: payload.category,
        price: payload.price,
        quentity: payload.quentity,
        totalPirce: payload.price * payload.quentity,
      };
      state.cartItems = [...state.cartItems, newItem];
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
