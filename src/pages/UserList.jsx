import React, { Fragment, useEffect, useState } from "react";
import { Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { api } from "../api/Services";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUsers = async () => {
    try {
      setLoading(true); // BEST PRACTICE
      const response = await api.get("/users");
      setUsers(response.data.users); // FIX
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false); // FIX
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h4 className="text-center mt-3">User List</h4>

      <Container>
        <Row>
          {loading ? (
            <Col className="text-center">
              <Spinner animation="border" /> Users are loading...
            </Col>
          ) : error ? (
            <Col className="text-danger text-center">
              Something went wrong!
            </Col>
          ) : (
            <Fragment>
              {users.map((user) => (
                <Col md={3} sm={6} xs={12} key={user.id} className="mb-3">
                  <Card>
                    <Card.Img
                      variant="top"
                      src={user.image || "https://via.placeholder.com/150"}
                    />
                    <Card.Body>
                      <Card.Title>
                        {user.firstName} {user.lastName}
                      </Card.Title>
                      <Card.Text>{user.email}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Fragment>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default UserList;