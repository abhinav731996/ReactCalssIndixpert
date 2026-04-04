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
        totalPrice: 0,
      },
      {
        id: 2,
        title: "Essence Mascara Lash Princess",
        thumbnail:
          "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
        category: "xyz",
        price: 10,
        quentity: 0,
        totalPrice: 0,
      },
    ],
    totalQuentities: 0,
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
        totalPrice: payload.price * payload.quentity,
      };
      state.cartItems = [...state.cartItems, newItem];
    },
        removeFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter((product) => product.id !== action.payload)
        
    },
    updateQuentity: (state, action) => {
  const index = state.cartItems.findIndex(
    (item) => item.id === action.payload.id
  );

  if (index !== -1) {   // ✅ IMPORTANT
    state.cartItems[index].quentity = action.payload.quentity;
    state.cartItems[index].totalPrice =
      state.cartItems[index].price * action.payload.quentity;
  }
},
  },
});

export const { addToCart, removeFromCart, updateQuentity } = cartSlice.actions;
export default cartSlice.reducer;
