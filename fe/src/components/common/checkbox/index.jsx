import React, { useState } from 'react';

const Checkbox = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input type="checkbox" checked={checked} onChange={handleCheckboxChange} />
    </label>
  );
};

export default Checkbox;
