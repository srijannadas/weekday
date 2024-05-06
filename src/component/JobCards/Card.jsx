import React, { useState } from "react";
import "./Cards.css";

const Card = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  const toggleExpansion = () => {
    setExpanded(!expanded);
    setShowOverlay(!showOverlay);
  };

  const renderDescription = () => {
    const words = job.jobDetailsFromCompany.split(" ");
    const visibleWords = expanded ? words : words.slice(0, 100);
    return visibleWords.join(" ");
  };

  return (
    <>
      <div className="card">
        <div className="card-head">
          <div className="card-logo">
            <img src={job.logoUrl} alt="" />
          </div>
          <div className="company-head">
            <h4 className="company-name">{job.companyName}</h4>
            <h3 className="job-title">{job.jobRole}</h3>
            <p className="location">{job.location}</p>
          </div>
        </div>
        <p className="salary">
          Estimated Salary:{" "}
          {job.minJdSalary === null
            ? "As per Interview"
            : "$" + job.minJdSalary}{" "}
          - ${job.maxJdSalary} ✅
        </p>
        <div className="about-company">
          <p className="about-head">About Company:</p>
          <h4 className="about-us">About Us</h4>
          <p
            className={`company-description ${
              expanded ? "" : "fade"
            } ${!showOverlay ? "show-overlay" : ""}`}
          >
            {renderDescription()}
          </p>
          {job.jobDetailsFromCompany.split(" ").length > 30 && (
            <a onClick={toggleExpansion} className="view-more">
              {expanded ? "View less" : "View more"}
            </a>
          )}
        </div>
        <div className="experience">
          <p className="min-exp">Minimum Experience:</p>
          <p className="min-exp-data">
            {job.minExp === null && job.maxExp === null
              ? "Fresher"
              : job.minExp + " years"}
          </p>
        </div>
        <div className="apply-buttons">
          <button className="apply">⚡ Easy Apply</button>
          <button className="referral">Unlock Referral asks</button>
        </div>
      </div>
    </>
  );
};

export default Card;
