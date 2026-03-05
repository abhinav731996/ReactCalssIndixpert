import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const RHFValidation = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm();
  const handleOnSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>This is React Hook Form Validation Without Yup</h1>
      <hr />
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Row>
          {/* For FirstName */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                {...register("firstname", {
                  required: "The Firstname is required.",
                })}
              />
              <div className="text-danger">{errors?.firstname?.message}</div>
            </Form.Group>
          </Col>
          {/* For LastName */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                {...register("lastname", {
                  required: "The lastname is required.",
                })}
              />
              <div className="text-danger">{errors?.lastname?.message}</div>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          {/* For Age */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="age">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                {...register("age", {
                  required: "The Age is required.",
                  min: { value: 18, message: "Age must be greater than 18" },
                  max: { value: 40, message: "Age must be less than 50" },
                })}
              />
              <div className="text-danger">{errors?.age?.message}</div>
            </Form.Group>
          </Col>
          {/* For Password */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                {...register("password", {
                  required: "The password is required.",
                  minLength: {
                    value: 6,
                    message: "Password must be greater than 4",
                  },
                  maxLength: {
                    value: 10,
                    message: "You can use maximum 10 character for password",
                  },
                  validate: (value) => {
                    if (!value) return true;
                    if (value.includes(" "))
                      return "Password cannot contain spaces";
                    const hasSpecialChar =
                      /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);
                    const hasNumber = /\d/.test(value);
                    if (!hasSpecialChar || !hasNumber) {
                      return "Password must contain at least one special character and one number.";
                    }
                    return true;
                  },
                })}
              />
              <div className="text-danger">{errors?.password?.message}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* For PhoneNumber */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="number"
                {...register("phone", {
                  required: "The phone is required.",
                  minLength: {
                    value: 10,
                    message: "Phone number must be of 10 digits",
                  },
                  maxLength: {
                    value: 10,
                    message: "Phone number must be of 10 digits",
                  },
                })}
              />
              <div className="text-danger">{errors?.phone?.message}</div>
            </Form.Group>
          </Col>
          {/* For Email */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                {...register("email", {
                  required: "The email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                })}
              />
              <div className="text-danger">{errors?.email?.message}</div>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          {/* For State */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Select
                {...register("state", { required: "The state is required." })}
              >
                <option value="">Select State</option>
                <option value="Haryana">Haryana</option>
                <option value="Rajisthan">Rajisthan</option>
                <option value="Punjab">Punjab</option>
              </Form.Select>
              <div className="text-danger">{errors?.state?.message}</div>
            </Form.Group>
          </Col>
          {/* For City */}
          <Col md={6}>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Select
                {...register("city", { required: "The city is required." })}
              >
                <option value="">Select city</option>
                <option value="Rohtak">Rohtak</option>
                <option value="Jaipur">Jaipur</option>
                <option value="Jalandher">Jalandher</option>
              </Form.Select>
              <div className="text-danger">{errors?.city?.message}</div>
            </Form.Group>
          </Col>
        </Row>
        

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};

export default RHFValidation;
