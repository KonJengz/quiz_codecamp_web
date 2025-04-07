import React, { useState } from 'react';

export default function DropDown({ value }) {
  const [option, setOption] = useState([
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Fullstack' }
  ]);
  return (
    <div>
      <div className="relative inline-block">
        <select
          className="bg-transparent text-white py-2 px-4 rounded-full border border-transparent
  focus:outline-none focus:ring-2
  appearance-none
  text-lg font-semibold
  custom-border-gradient"
          value={value}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value="">Please select category</option>
          {option.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-white">
          ▼
        </div>
      </div>
    </div>
  );
}
