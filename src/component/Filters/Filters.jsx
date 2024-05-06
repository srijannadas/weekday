// Filters/Filters.jsx
import React, { useState, useEffect } from 'react';
import './Filters.css';

const Filters = ({ onFilterChange, jdList }) => {
  const [minExperience, setMinExperience] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState('');
  const [techStack, setTechStack] = useState('');
  const [role, setRole] = useState('');
  const [minBasePay, setMinBasePay] = useState('');
  const [minExperienceOptions, setMinExperienceOptions] = useState([]);
  const [maxExperienceOptions, setMaxExperienceOptions] = useState([]);
  const [locationOptions, setLocationOptions] = useState([]);
  const [roleOptions, setRoleOptions] = useState([]);

  // Extract unique values for filter dropdowns
  useEffect(() => {
    const uniqueLocations = [...new Set(jdList.map(job => job.location))];
    const uniqueRoles = [...new Set(jdList.map(job => job.jobRole))];
    const uniqueMinExperience = [...new Set(jdList.map(job => job.minExp))];
    const uniqueMaxExperience = [...new Set(jdList.map(job => job.maxExp))];
    // You can similarly extract other unique values for filters
    
    // Update state with unique values
    setLocationOptions(uniqueLocations);
    setRoleOptions(uniqueRoles);
    setMinExperienceOptions(uniqueMinExperience);
    setMaxExperienceOptions(uniqueMaxExperience);
  }, [jdList]);

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

  // Trigger filter function on any input change
  const handleInputChange = () => {
    handleFilterChange();
  };

  return (
    <div className="filters-container">
      <div className="filter-row">
        <div className="filter-input">
          <select value={minExperience} onChange={e => { setMinExperience(e.target.value); handleInputChange(); }}>
            <option value="">Minimum Experience</option>
            {minExperienceOptions.map(exp => (
              <option key={exp} value={exp}>{exp}</option>
            ))}
          </select>
        </div>
        <div className="filter-input">
          <input type="text" placeholder="Company Name" value={companyName} onChange={e => { setCompanyName(e.target.value); handleInputChange(); }} />
        </div>
        <div className="filter-input">
          <select value={location} onChange={e => { setLocation(e.target.value); handleInputChange(); }}>
            <option value="">Location</option>
            {locationOptions.map(loc => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div className="filter-input">
          <input type="text" placeholder="Technology" value={techStack} onChange={e => { setTechStack(e.target.value); handleInputChange(); }} />
        </div>
        <div className="filter-input">
          <select value={role} onChange={e => { setRole(e.target.value); handleInputChange(); }}>
            <option value="">Job Role</option>
            {roleOptions.map(role => (
              <option key={role} value={role}>{role}</option>
            ))}
          </select>
        </div>
        <div className="filter-input">
          <input type="text" placeholder="Minimum Base Pay" value={minBasePay} onChange={e => { setMinBasePay(e.target.value); handleInputChange(); }} />
        </div>
        <div className="filter-input">
          <select value={remote} onChange={e => { setRemote(e.target.value); handleInputChange(); }}>
            <option value="">Remote/Onsite</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filters;