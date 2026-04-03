import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addToWishlist } from "../store/slices/WishlistSlice";

export const AddToWishlist = ({ product }) => {

    // // using context to read wishlist 
//   const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

    // // using redux to read wishlist 
    const dispatch = useDispatch();
  const wishlistState = useSelector((state) => state.wishlist);

  const found = wishlistState?.wishlistItems?.some((item)=> item.id === product.id)

  const handleAddToWishlist = () => {
    if (found) {
      toast("Already added!!");
    } else {
      // added using context API
      // wishlistDispatch({type: "ADD_TO_WISHLIST", payload: product, })

      // added using redux
        dispatch(addToWishlist(product))
    }
  };

  return (
    <div>
      <Button size="sm" variant="outline-success" onClick={handleAddToWishlist}>
        Add to Wishlist {found ? <Check /> : " "}
      </Button>
      <ToastContainer />
    </div>
  );
};

export default AddToWishlist;
