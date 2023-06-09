import React, { useState } from 'react';
import Select from 'react-select';
import "../App.css"

const options = [
  { value: 'chocolate', label: 'Health Insurance' },
  { value: 'strawberry', label: 'Car Insurance' },
  { value: 'vanilla', label: 'Home Insurance' },
];

export default function Dropbox() {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="Dropbox" >
      <Select
      
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        
      />
    </div>
  );
}