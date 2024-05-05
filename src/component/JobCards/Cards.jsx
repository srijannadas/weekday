// JobCards/Cards.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const Cards = ({ filters }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings based on filters
    axios
      .post("https://api.weekday.technology/adhoc/getSampleJdJSON")
      .then((response) => {
        // Apply filters
        let filteredJobs = response.data.jdList.filter((job) => {
          // Filter by minimum experience
          if (
            filters.minExperience &&
            (job.minExp < filters.minExperience ||
              job.maxExp < filters.minExperience)
          ) {
            return false;
          }
          // Filter by company name
          if (
            filters.companyName &&
            !job.companyName
              .toLowerCase()
              .includes(filters.companyName.toLowerCase())
          ) {
            return false;
          }
          // Filter by location
          if (
            filters.location &&
            !job.location.toLowerCase().includes(filters.location.toLowerCase())
          ) {
            return false;
          }
          // Filter by remote/on-site
          if (filters.remote && job.location.toLowerCase().includes("remote")) {
            return false;
          }
          // Filter by tech stack
          if (
            filters.techStack &&
            !job.jobDetailsFromCompany
              .toLowerCase()
              .includes(filters.techStack.toLowerCase())
          ) {
            return false;
          }
          // Filter by role
          if (
            filters.role &&
            !job.jobRole.toLowerCase().includes(filters.role.toLowerCase())
          ) {
            return false;
          }
          // Filter by minimum base pay
          if (
            filters.minBasePay &&
            job.minJdSalary &&
            job.minJdSalary < filters.minBasePay
          ) {
            return false;
          }

          return true; // Include job if it passes all filters
        });

        setJobs(filteredJobs);
      })
      .catch((error) => {
        console.error("Error fetching job data:", error);
      });
  }, [filters]); // Update job listings when filters change

  return (
    <div className="cards-container">
      {jobs.map((job) => (
        <Card key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default Cards;
