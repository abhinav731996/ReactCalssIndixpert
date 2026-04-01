import React from 'react'

const WishlistReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_WISHLIST":
            console.log("ADD_TO_WISHLIST action executed" + action.payload);
            return {
                ...state,
                wishlistItems: [...state.wishlistItems,{
                    id: action.payload.id,
                    title: action.payload.title,
                    thumbnail: action.payload.thumbnail
                }]

            };
        case "REMOVE_FROM_WISHLIST":
            console.log("REMOVE_FROM_WISHLIST action executed & id =" + action.id);
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((item)=>item.id!=action.id)
            };
    
        default:
            console.log("No action provided");
            return state;
            
    }
  console.log("This is wishlist page ");
  
}

export default WishlistReducer
