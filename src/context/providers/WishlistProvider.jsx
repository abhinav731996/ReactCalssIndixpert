import React, { useReducer } from "react";
import { UserContext, WishlistContext } from "../Context";
import WishlistReducer from "../reducers/WishlistReducer";

const WishlistProvider = ({ children }) => {
  const initialState = {
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
  };
  const [wishlistState, wishlistDispatch] = useReducer(WishlistReducer, initialState);
  return (
    <div>
      <WishlistContext.Provider value={{ wishlistState, wishlistDispatch }}>
        {children}
      </WishlistContext.Provider>
    </div>
  );
};

export default WishlistProvider;
