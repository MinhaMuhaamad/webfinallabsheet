// Form.js
'use strict';

import { useRef } from 'react';
import MyInput from './MyInput.js';
export default function Form() {
  const ref = useRef(null);
  function handleClick() {
    ref.current.focus();
    console.log('Input focused!');
  }
  return (
    <form>
      <MyInput label="Enter your name:" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  );
}