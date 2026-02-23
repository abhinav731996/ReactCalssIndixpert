import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

const RBFormsPractive = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState("Hi!")
  const [city, setCity] = useState();
  const [selectedColor, setSelectedColor] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Email Address: " + email);
    
}

const handlecolorSelection = (e) => {
    const {value, checked} = e.target;
    if (checked) setSelectedColor([...selectedColor, value])
        else setSelectedColor(selectedColor.filter((color=>color!==value)))
  }
  return (
    <div>
      <h1>Practice of Form</h1>
      <hr />

    <Form onSubmit={handleSubmit}>

      <h3 className='text-secondary'>Textbox Control</h3>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" required autoComplete="username"
         defaultValue={email} onChange={(e) => setEmail(e.target.value)}/>
         <p>your email is: {email}</p>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required placeholder="Enter password" autoComplete="current-password"
         defaultValue={password} onChange={(e) => setPassword(e.target.value)}/>
         <p>your password is: {password}</p>
      </Form.Group>

      <h3 className='text-secondary'>Textbox Control</h3>

      <Form.Group className="mb-3" controlId="message" >
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder='Enter your message' defaultValue={message} onChange={(e) => setMessage(e.target.value)}></Form.Control>
        your message is: <pre>{message}</pre>
      </Form.Group>

      <h3 className='text-secondary'>Select/ComboBox Control</h3>

      <Form.Select aria-label="Default select example"  onChange={(e) => setCity(e.target.value)}>
        <option value="none">Select City</option>
        <option value="Rohtak">Rohtak</option>
        <option value="Delhi">Delhi</option>
        <option value="Gurgaon">Gurgaon</option>
      </Form.Select>
        <p>Your City is: {city}</p>

      <h3 className='text-secondary'>Checkbox & radio</h3>

    <Form.Group className="mb-3" controlId="message" >
        <Form.Label>Example checkbox</Form.Label>
      <Form.Check // prettier-ignore
            type="checkbox"
            id="red"
            label="red-color"
            value="red"
            onChange={handlecolorSelection}
            />

          <Form.Check
            // disabled
            type="checkbox"
            label="green"
            id="green-color"
            value="green"
            onChange={handlecolorSelection}
            />
          <Form.Check
            type="checkbox"
            label="blue"
            id="blue-color"
            value="blue"
            onChange={handlecolorSelection}
          />
      </Form.Group>
      <p>Selected colors: {JSON.stringify(selectedColor)}</p>
    </Form>

    <br />
    <Button type="submit">Submit</Button>
    </div>
  )
}

export default RBFormsPractive
