import React, { useState } from 'react';
import DatePicker from './components/DatePicker';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date, dateStr) => {
    setSelectedDate(date);
    console.log('Selected date:', dateStr);
  };

  return (
    <div className="p-4">
      <h1>Date Picker Example</h1>
      <div className="max-w-md mt-4">
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          placeholder="Choose a date..."
        />
      </div>
    </div>
  );
}

export default App;