import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Card from './Card';

const Cards = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [reachedEnd, setReachedEnd] = useState(false);
  const observer = useRef();

  useEffect(() => {
    setLoading(true);
    fetchJobs();

    setupIntersectionObserver(); // Setup intersection observer for infinite scroll

    return () => {
      // Clean up the intersection observer when the component unmounts or is updated
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [page]);

  const setupIntersectionObserver = () => {
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prevPage => prevPage + 1);
      }
    });

    observer.current.observe(document.querySelector('.observer-element'));
  };

  const fetchJobs = () => {
    axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', { page })
      .then(response => {
        const newJobs = response.data.jdList;
  
        if (page === 1) {
          setJobs(newJobs); // Replace existing jobs with new jobs
        } else {
          setJobs(prevJobs => [...prevJobs, ...newJobs]);
        }
  
        if (newJobs.length === 0) {
          setReachedEnd(true); // Indicate that end of results is reached
        }
  
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
        setLoading(false);
      });
  };

  return (
    <div className="cards-container">
      {jobs.map(job => (
        <Card key={job.jdUid} job={job} />
      ))}
      <div className="observer-element" style={{ height: '10px' }} />
      {loading && <p>Loading...</p>}
    </div>
  );
};

export default Cards;