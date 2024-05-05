// Card.jsx
import React, { useState } from 'react';

const Card = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="card">
      <img src={job.logoUrl} alt={job.companyName} />
      <div className="card-details">
        <h2>{job.companyName}</h2>
        <p>Location: {job.location}</p>
        <p>Job Role: {job.jobRole}</p>
        <p>Experience: {job.minExp} - {job.maxExp} years</p>
        <div className="card-description">
          {/* Display truncated description with "Read More" button */}
          <p className={expanded ? 'expanded' : 'truncated'}>
            {job.jobDetailsFromCompany.length > 100 && !expanded
              ? job.jobDetailsFromCompany.substring(0, 100) + '...'
              : job.jobDetailsFromCompany}
          </p>
          {/* Render "Read More" button */}
          {job.jobDetailsFromCompany.length > 100 && (
            <button className="read-more" onClick={toggleExpansion}>
              {expanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;