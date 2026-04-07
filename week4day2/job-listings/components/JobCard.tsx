'use strict';

import React from 'react';
import styles from './JobCard.module.css';

interface Job {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

interface JobCardProps {
  job: Job;
  onTagClick: (tag: string) => void;
}

const JobCard: React.FC<JobCardProps> = ({ job, onTagClick }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className={`${styles.card} ${job.featured ? styles.featured : ''}`}>
      <div className={styles.leftContent}>
        <div className={styles.logoWrapper}>
          <img 
            src={job.logo} 
            alt={`${job.company} logo`} 
            className={styles.logo}
          />
        </div>
        
        <div className={styles.info}>
          <div className={styles.companyRow}>
            <span className={styles.companyName}>{job.company}</span>
            <div className={styles.badges}>
              {job.new && <span className="badge badge-new">New!</span>}
              {job.featured && <span className="badge badge-featured">Featured</span>}
            </div>
          </div>
          
          <h2 className={styles.position}>{job.position}</h2>
          
          <div className={styles.details}>
            <span>{job.postedAt}</span>
            <span className={styles.dot}></span>
            <span>{job.contract}</span>
            <span className={styles.dot}></span>
            <span>{job.location}</span>
          </div>
        </div>
      </div>
      
      <div className={styles.divider}></div>
      
      <div className={styles.tags}>
        {tags.map((tag) => (
          <button 
            key={tag} 
            className="tag"
            onClick={() => onTagClick(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default JobCard;
