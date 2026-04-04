import React, { useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { Check } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, InputGroup } from "react-bootstrap";
import {
  addToCart,
  removeFromCart,
  updateQuentity,
} from "../store/slices/CartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);
  const [quentity, setQuentity] = useState(1);

  const found = cartState?.cartItems?.some((item) => item.id === product.id);

  useEffect(() => {
    if (found) {
      // ✅ ONLY when item exists
      dispatch(updateQuentity({ id: product.id, quentity }));
    }
  }, [quentity, found]);

  const handleAddToCart = () => {
    if (found) {
      toast.info("Already added!!");
    } else {
      dispatch(addToCart({ ...product, quentity }));
    }
  };

  const handleQuentityPlus = () => {
    setQuentity((previous) => previous + 1);
  };

  const handleQuentityMinus = () => {
    if (quentity > 1) {
      setQuentity((previous) => previous - 1);
    } else {
      dispatch(removeFromCart(product.id));
    }
  };
  return (
    <div>
      {found ? (
        <InputGroup>
          <Button
            size="sm"
            variant="outline-primary"
            type="button"
            onClick={handleQuentityMinus}
          >
            -
          </Button>
          <Form.Control
            style={{ maxWidth: "100px" }}
            type="text"
            readOnly
            className="form-control text-center quentity-input"
            value={quentity}
          />
          <Button
            size="sm"
            variant="outline-primary"
            type="button"
            onClick={handleQuentityPlus}
          >
            +
          </Button>{" "}
        </InputGroup>
      ) : (
        <Button size="sm" variant="outline-primary" onClick={handleAddToCart}>
          Add to cart
        </Button>
      )}

      <ToastContainer />
    </div>
  );
};

export default AddToCart;
