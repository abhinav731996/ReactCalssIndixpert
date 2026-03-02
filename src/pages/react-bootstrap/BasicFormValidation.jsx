import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const BasicFormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Hi!");
  const [city, setCity] = useState("");
  const [selectedColor, setSelectedColor] = useState([]);
  const [payment, setPayment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email Address: " + email);
  };

  const [validated, setValidated] = useState(false);

  const handleSubmit2 = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      alert("Form Submitted...");
    }

    setValidated(true);
  };

  const handlecolorSelection = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSelectedColor([...selectedColor, value]);
    } else {
      setSelectedColor(selectedColor.filter((color) => color !== value));
    }
  };

  return (
    <div>
      <h1>Basic Form validation </h1>
      <br />

      <Form onSubmit={handleSubmit}>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="validationFormik01">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  // isValid={touched.firstname && !errors.firstname}
                  isInvalid={!!errors.firstname}
                />
            </Form.Group>
        </Row>
        {/* for main email formatting */}

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="name@example.com"
            required
            autoComplete="username"
            onChange={(e) => setEmail(e.target.value)}
          />
          <p>your email is: {email}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            required
            placeholder="Enter password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>your password is: {password}</p>
        </Form.Group>

        {/* for textbox control  */}
        <h3 className="text-secondary">Textbox Control</h3>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            placeholder="Enter your message"
            onChange={(e) => setMessage(e.target.value)}
          />
          your message is: <pre>{message}</pre>
        </Form.Group>

        {/* For selected any one of the options */}
        <h3 className="text-secondary">Select/ComboBox Control</h3>

        <Form.Select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Rohtak">Rohtak</option>
          <option value="Delhi">Delhi</option>
          <option value="Gurgaon">Gurgaon</option>
        </Form.Select>
        <p>Your City is: {city}</p>

        {/* For checkbox */}
        <h3 className="text-secondary">Checkbox </h3>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Example checkbox</Form.Label>
          <Form.Check
            type="checkbox"
            id="red"
            label="Red-color"
            value="red"
            onChange={handlecolorSelection}
          />

          <Form.Check
            // disabled
            type="checkbox"
            label="Green"
            id="green-color"
            value="green"
            onChange={handlecolorSelection}
          />
          <Form.Check
            type="checkbox"
            label="Blue"
            id="blue-color"
            value="blue"
            onChange={handlecolorSelection}
          />
        </Form.Group>
        <p>
          Selected colors: {/* {JSON.stringify(selectedColor)} */}
          {/* {selectedColor.join(", ")} */}
          {selectedColor.length > 0 ? selectedColor.join(", ") : "None"}
        </p>

        {/* For Radio buttons */}
        <h3 className="text-secondary">Radio</h3>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label>Select the payment method</Form.Label>
          <Form.Check
            type="radio"
            id="Creadit-card"
            label="Creadit-card"
            value="Creadit-card"
            name="paymentType"
            onChange={(e) => setPayment(e.target.value)}
          />

          <Form.Check
            // disabled
            type="radio"
            label="Debit-card"
            id="Debit-card"
            value="Debit-card"
            name="paymentType"
            onChange={(e) => setPayment(e.target.value)}
          />
          <Form.Check
            type="radio"
            label="UPI"
            id="UPI"
            value="UPI"
            name="paymentType"
            onChange={(e) => setPayment(e.target.value)}
          />
        </Form.Group>
        <p>
          Selected Payment: {/* {JSON.stringify(selectedColor)} */}
          {/* {selectedColor.join(", ")} */}
          {payment ? payment : "None"}
        </p>
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default BasicFormValidation;
