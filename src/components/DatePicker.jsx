import React, { useEffect, useRef } from 'react';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.css';

const DatePicker = ({ 
  value, 
  onChange, 
  placeholder = 'Select date...', 
  options = {} 
}) => {
  const inputRef = useRef(null);
  const flatpickrInstance = useRef(null);

  useEffect(() => {
    // Initialize Flatpickr
    flatpickrInstance.current = flatpickr(inputRef.current, {
      // Default options
      dateFormat: 'Y-m-d',
      allowInput: true,
      clickOpens: true,
      defaultValue: value,
      // Handle date change
      onChange: (selectedDates, dateStr) => {
        if (onChange) {
          onChange(selectedDates[0], dateStr);
        }
      },
      // Merge with custom options
      ...options
    });

    // Cleanup on component unmount
    return () => {
      if (flatpickrInstance.current) {
        flatpickrInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array

  // Update value from props
  useEffect(() => {
    if (flatpickrInstance.current && value) {
      flatpickrInstance.current.setDate(value, false);
    }
  }, [value]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      data-input
    />
  );
};

export default DatePicker;