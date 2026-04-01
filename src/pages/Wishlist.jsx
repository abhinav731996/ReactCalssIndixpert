import React, { useContext } from "react";
import { Button, Image, Table } from "react-bootstrap";
import { WishlistContext } from "../context/Context";

const Wishlist = () => {
  const { wishlistState, wishlistDispatch } = useContext(WishlistContext);
  return (
    <div>
      <h1>Wishlist</h1>
      <hr />
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
                    onClick={() =>
                      wishlistDispatch({
                        type: "REMOVE_FROM_WISHLIST",
                        id: item.id,
                      })
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
