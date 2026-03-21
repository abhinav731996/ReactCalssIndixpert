import React, { useRef, useState, forwardRef } from 'react';
import { Pause, Play } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap'; // Ensure this is imported

// In React 19, ref is just a prop!
const MyInputBox = ({ ref }) => {
  return <input ref={ref} />;
};

// Corrected forwardRef: note the (props, ref) arguments
const PlayControl = forwardRef((props, ref) => {
  return (
    <div>
      <Button onClick={() => ref.current.play()}>
        <Play /> Play
      </Button>{" "}
      <Button onClick={() => ref.current.pause()}>
        <Pause /> Pause
      </Button>
    </div>
  );
});

const UseRefHook = () => {
  const [inputValue, setInputValue] = useState('testing');
  const inputRef = useRef(null);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setInputValue(inputRef.current.value);
    }
  };

  return (
    <div className="p-4">
      <h2>UseRef Hook</h2>
      <p>The value of input = {inputValue}</p>
      <hr />
      <MyInputBox ref={inputRef} />
      <Button onClick={handleClick} variant="secondary" className="ms-2">
        Set Focus & Sync Value
      </Button>

      <hr />

      {/* Video Section */}
      <video 
        src="https://www.w3schools.com/tags/mov_bbb.mp4"
        loop
        muted
        ref={videoRef}
        width="400"
      ></video>
      <PlayControl ref={videoRef}/>
    </div>
  );
};

export default UseRefHook;