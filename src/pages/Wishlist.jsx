import React, { useContext } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { WishlistContext } from "../context/Context";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../store/slices/WishlistSlice";

const Wishlist = () => {

  const dispatch = useDispatch();
  // // context API to read wishlist items 
  // const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

  // Redux to read wishlist items
   const wishlistState = useSelector((state)=> state.wishlist)
  // const wishlistState = [];
  return (
    <div>
      <h1>Wishlist</h1>
      <hr />
      {/* <pre>{JSON.stringify(fullState,null,2)}</pre> */}
      <Table responsive>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {wishlistState?.wishlistItems?.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <Image width={80} src={item.thumbnail} />
                </td>
                <td>{item.title}</td>
                <td>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={
                      // () =>
                      // wishlistDispatch({
                      //   type: "REMOVE_FROM_WISHLIST",
                      //   id: item.id,
                      // })
                      ()=> dispatch(removeFromWishlist(item.id))
                    }
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() =>
                      wishlistDispatch({ 
                        type: "ADD_TO_WISHLIST", })
                    }
                  >
                    Move to cart
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
