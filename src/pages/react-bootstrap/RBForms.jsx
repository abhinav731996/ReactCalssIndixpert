import React from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";

const RBForms = () => {
  const { Formik } = formik;

  const schema = yup.object().shape({
      firstname: yup.string().required("First name is required"),
      lastname: yup.string().required("Last name is required"),
      address: yup.string().required("Please enter your address, it's required"),
      country: yup.string().required("Please select the country it's required"),
      city: yup.string().required("Please select the city it's required"),
      state: yup.string().required("Please select the state it's required"),
      zip: yup
        .string()
        .matches(/^\+?[1-9]\d{5,5}$/, "Enter valid PIN value")
        .required("Please enter valid Zip/Pin"),
      phone: yup
        .string()
        .matches(/^\+?[1-9]\d{9,10}$/, "Enter a valid phone number")
        .required("Phone number is required."),
      email: yup
        .string()
        .matches(
          /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          "Enter a valid email address",
        )
        .required("Email address is required."),
      gender: yup.string().required("Gender is required"),
      hobbies: yup
        .array()
        .required("Hobbies are required")
        .typeError("Please select at least two hobbies")
        .min(2, "Please select at least two hobbies"),
      termsandconditions: yup.bool().oneOf([true], "Terms must be accepted"),
    });
  return (
    <div>
      <h1>Exercise of Forms</h1>
      <hr />
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          firstname: "",
          lastname: "",
          phone: "",
          city: "",
          state: "",
          zip: "",
          terms: false,
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <pre>{JSON.stringify(errors, null, 2)}</pre>

            <Row className="mb-3">
              {/* Firstname  */}
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
                <Form.Control.Feedback type="invalid">
                  {errors.firstname}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              {/* Lastname */}
              <Form.Group as={Col} controlId="validationFormik02">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  // isValid={touched.firstName && !errors.firstName}
                  isInvalid={!!errors.lastname}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastname}
                </Form.Control.Feedback>

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            {/* Email */}
            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>Email</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Please enter email"
                    aria-describedby="inputGroupPrepend"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
            </Row>


            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} controlId="phone">
                <Form.Label>Phone</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    placeholder="Please enter phone no."
                    aria-describedby="inputGroupPrepend"
                    name="phone"
                    value={values.phone}
                    onChange={handleChange}
                    isInvalid={!!errors.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Col} controlId="state">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose..."
                name="state"
                    value={values.state}
                    onChange={handleChange}
                    isInvalid={!!errors.state}
                >
                  <option>Choose...</option>
                  <option>Haryana</option>
                  <option>Delhi</option>
                  <option>Rajistan</option>
                  <option>Himachal Perdash</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                                    {errors.state}
                                  </Form.Control.Feedback>
              </Form.Group>
              

            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Select defaultValue="Choose..."
                name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                >
                  <option>Choose...</option>
                  <option>Gurgaon</option>
                  <option>Rohtak</option>
                  <option>Jaipur</option>
                  <option>Manali</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                                    {errors.city}
                                  </Form.Control.Feedback>
              </Form.Group>

              

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control 
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={values.zip}
                  onChange={handleChange}
                  isInvalid={!!errors.zip}/>
                <Form.Control.Feedback type="invalid">
                  {errors.zip}
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Form.Group className="mb-3" as={Col} controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="1234 Main St" />
              </Form.Group>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RBForms;
