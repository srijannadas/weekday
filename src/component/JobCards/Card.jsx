// Card.jsx
import React, { useState } from "react";
import "./Cards.css";

const Card = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div class="ag-format-container">
      <div class="ag-courses_box">
        <div class="ag-courses_item">
          <a href="#" class="ag-courses-item_link">
            <div class="ag-courses-item_bg"></div>
            <span class="ag-courses-item_logo" style={{ zIndex: "2px" }}>
              <img src={job.logoUrl} alt="" width={"50px"} />
            </span>
            <div class="ag-courses-item_title">{job.jobRole}</div>
            <div className="ag-courses-item_date-box job-company-name">
              {job.companyName}
            </div>
            <div className="ag-courses-item_date-box job-company-location">
              {job.location}
            </div>
            <div className="ag-courses-item_date-box job-company-name">
              <p className={expanded ? "expanded" : "truncated"}>
                {job.jobDetailsFromCompany.length > 100 && !expanded
                  ? job.jobDetailsFromCompany.substring(0, 100) + "..."
                  : job.jobDetailsFromCompany}
                {job.jobDetailsFromCompany.length > 100 && (
                  <a
                    className=""
                    style={{ color: "#fff", textDecoration: "underline" }}
                    onClick={toggleExpansion}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </a>
                )}
              </p>
              {/* Render "Read More" button */}
            </div>

            <div class="ag-courses-item_date-box">
              Salary: &nbsp;
              <span class="ag-courses-item_date">
                {job.minJdSalary === null
                  ? "As per Interview"
                  : "$" + job.minJdSalary}{" "}
                - ${job.maxJdSalary}
              </span>
            </div>
            <div class="ag-courses-item_date-box">
              Experience: &nbsp;
              <span class="ag-courses-item_date">
                {job.minExp === null && job.maxExp === null
                  ? "Fresher"
                  : job.minExp + " years"}{" "}
                {job.minExp === null && job.maxExp === null ? "" : "-"}{" "}
                {job.maxExp === null ? "" : job.maxExp + " years"}
              </span>
            </div>
            <button className="apply-btn">
              Apply Now{" "}
              <span className="apply-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-square-arrow-out-up-right"
                >
                  <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                  <path d="m21 3-9 9" />
                  <path d="M15 3h6v6" />
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
