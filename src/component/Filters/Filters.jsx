// Filters/Filters.jsx
import React, { useState } from 'react';
import './Filters.css';

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
    <div className="filters-container">
      <div className="filter-input">
        <input type="text" placeholder="Years of Experience" value={minExperience} onChange={e => setMinExperience(e.target.value)} />
      </div>
      <div className="filter-input">
        <input type="text" placeholder="Company Name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </div>
      <div className="filter-input">
        <input type="text" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      </div>
     
      <div className="filter-input">
        <input type="text" placeholder="Technology" value={techStack} onChange={e => setTechStack(e.target.value)} />
      </div>
      <div className="filter-input">
        <input type="text" placeholder="Job Role" value={role} onChange={e => setRole(e.target.value)} />
      </div>
      <div className="filter-input">
        <input type="text" placeholder="Minimum Base Pay" value={minBasePay} onChange={e => setMinBasePay(e.target.value)} />
      </div>
      <div className="filter-input">
        <button onClick={handleFilterChange}>Apply Filters</button>
      </div>
    </div>
  );
};

export default Filters;