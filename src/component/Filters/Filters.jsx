// Filters/Filters.jsx
import React, { useState } from 'react';

const Filters = ({ onFilterChange }) => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');

  const handleFilterChange = () => {
    // Pass the filter values to the parent component
    onFilterChange({
      minExperience,
      companyName,
      location,
      remote,
      techStack,
      role,
      minBasePay
    });
  };

  return (
    <div>
      {/* Implement your filter inputs here */}
      <input type="text" placeholder="Min Experience" value={minExperience} onChange={e => setMinExperience(e.target.value)} />
      <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <input type="checkbox" checked={remote} onChange={e => setRemote(e.target.checked)} />
      <input type="text" placeholder="Tech Stack" value={techStack} onChange={e => setTechStack(e.target.value)} />
      <input type="text" placeholder="Role" value={role} onChange={e => setRole(e.target.value)} />
      <input type="text" placeholder="Min Base Pay" value={minBasePay} onChange={e => setMinBasePay(e.target.value)} />
      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default Filters;