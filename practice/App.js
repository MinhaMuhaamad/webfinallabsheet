// App.js
'use strict';

import ChapterHeading from './ChapterHeading.js';
import Form from './Form.js';

function App() {
  return (
    <div>
      <ChapterHeading title="Chapter 3: The Revelation" />
      <p>The mystery was about to be revealed...</p>
      <Form />
    </div>
  );
}

// Initialize React
const root = ReactDOM.createRoot(document.getElementById('react-root'));
root.render(<App />);
