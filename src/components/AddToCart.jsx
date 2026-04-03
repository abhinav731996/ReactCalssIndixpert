import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart } from "../store/slices/CartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  const found = cartState?.cartItems?.some(
    (item) => item.id === product.id,
  );

  const handleAddToCart = () => {
    if (found) {
      toast.info("Already added!!");
    } else {
      dispatch(addToCart(product));
    }
  };

  return (
    <div>
      <Button size="sm" variant="outline-success" onClick={handleAddToCart}>
        Add to cart {found ? <Check /> : " "}
      </Button>
      <ToastContainer />
    </div>
  );
};

export default AddToCart;
