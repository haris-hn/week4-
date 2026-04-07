'use client';

import React, { useMemo } from 'react';
import FilterBar from '../components/FilterBar';
import JobCard from '../components/JobCard';
import jobsData from '../data/jobs.json';
import { useFilterStore } from '../store/useFilterStore';

export default function Home() {
  const { filters, addFilter } = useFilterStore();

  const filteredJobs = useMemo(() => {
    if (filters.length === 0) return jobsData;

    return jobsData.filter((job) => {
      const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
      return filters.every((filter) => jobTags.includes(filter));
    });
  }, [filters]);

  return (
    <main>
      <header className="header"></header>
      
      <div className="container">
        <FilterBar />
        
        <div className="job-list">
          {filteredJobs.map((job) => (
            <JobCard 
              key={job.id} 
              job={job} 
              onTagClick={addFilter} 
            />
          ))}
        </div>
      </div>
    </main>
  );
}
