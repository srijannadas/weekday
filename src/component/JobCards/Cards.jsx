import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Cards = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON')
      .then(response => {
        setJobs(response.data.jdList);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="cards-container">
      {jobs.map((job, index) => (
        <Card key={job.jdUid} job={job} />
      ))}
    </div>
  );
};

export default Cards;