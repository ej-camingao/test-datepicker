import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

const DatePicker = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const picker = flatpickr(inputRef.current, {
      dateFormat: 'Y-m-d',
    });

    return () => {
      picker.destroy();
    };
  }, []);

  return (
    <div>
      <input 
        ref={inputRef} 
        type="text" 
        placeholder="Select date..." 
        style={{ padding: '8px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default DatePicker;