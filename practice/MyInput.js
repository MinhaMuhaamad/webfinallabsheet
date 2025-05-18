// MyInput.js
'use strict';

import { forwardRef } from 'react';

const MyInput = forwardRef(function MyInput(props, ref) {
  return (
    <div>
      <label>{props.label}</label>
      <input ref={ref} type="text" />
    </div>
  );
});

export default MyInput;