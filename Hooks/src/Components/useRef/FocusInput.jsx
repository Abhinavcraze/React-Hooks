import React, { useRef, useEffect } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();  /*current from the dom node */
  }, []);

  return (
    <div>
      <h3>Focus Input Example</h3>
      <input
        ref={inputRef}
        type="text"
        className="white-input"
        placeholder="Type something..."
      />
    </div>
  );
}

export default FocusInput;
