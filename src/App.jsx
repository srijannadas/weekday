// App.jsx
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './component/JobCards/Cards';
import Filters from './component/Filters/Filters';
import Header from './component/Header/Header';

function App() {
  const defaultFilters = {
    minExperience: '',
    companyName: '',
    location: '',
    remote: false,
    techStack: '',
    role: '',
    minBasePay: ''
  };

  const [allJobs, setAllJobs] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    // Fetch all job listings initially
    axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON')
      .then(response => {
        setAllJobs(response.data.jdList);
      })
      .catch(error => {
        console.error('Error fetching job data:', error);
      });
  }, []);

  const handleFilterChange = newFilters => {
    setFilters(newFilters);
  };

  return (
    <>
      <Header />
      <Filters jdList={allJobs} onFilterChange={handleFilterChange} />
      <Cards filters={filters} allJobs={allJobs} />
    </>
  );
}

export default App;