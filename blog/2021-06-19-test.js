import React, { useState } from 'react';

/**
 * CopyButton Component
 *
 * @description
 * A button component that copies a string of code to the clipboard when clicked.
 *
 * @param {Object} props - The component props.
 * @param {string} props.code - The code string to be copied.
 *
 * @returns {JSX.Element}
 * A React Element representing the CopyButton component.
 */
function CopyButton({ code }) {
  // State hook for storing the copy success message. Initialized with an empty string.
  const [copyMessage, setCopyMessage] = useState('');

  /**
   * handleCopy
   *
   * @description
   * An event handler function for the button's onClick event. It copies the code string to the clipboard.
   *
   * @param {Object} event - The event object.
   */
  const handleCopy = (event) => {
    // Creating a new textarea element to hold the code string.
    const textarea = document.createElement('textarea');
    textarea.value = code;

    // Appending the textarea to the document body.
    document.body.appendChild(textarea);

    // Selecting the text inside the textarea.
    textarea.select();

    // Copying the selected text to the clipboard.
    document.execCommand('copy');

    // Removing the textarea from the document body.
    document.body.removeChild(textarea);

    // Setting the copy success message.
    setCopyMessage('Code copied to clipboard!');
  };

  /**
   * JSX Return
   *
   * @description
   * The JSX code that represents the UI of the CopyButton component.
   *
   * @returns {JSX.Element}
   */
  return (
    <div>
      <button onClick={handleCopy}>Copy Code</button>
      <p>{copyMessage}</p>
    </div>
  );
}

// Usage example for the CopyButton component

import React from 'react';
import ReactDOM from 'react-dom';

// This example demonstrates the CopyButton component.
function Example() {
  const code = `function helloWorld() {
  console.log('Hello, World!');
}`;

  return (
    <div>
      <h2>Example: Copying Code</h2>
      <CopyButton code={code} />
      {/* In this example, when you click the "Copy Code" button, the code string will be copied to the clipboard. */}
    </div>
  );
}

// Rendering the example to the DOM
ReactDOM.render(<Example />, document.getElementById('root'));
