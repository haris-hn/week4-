'use strict';

import React from 'react';
import styles from './FilterBar.module.css';
import { useFilterStore } from '../store/useFilterStore';

const FilterBar: React.FC = () => {
  const { filters, removeFilter, clearFilters } = useFilterStore();

  if (filters.length === 0) return null;

  return (
    <div className={styles.filterBarContainer}>
      <div className={styles.filterBar}>
        <div className={styles.filterTags}>
          {filters.map((filter) => (
            <div key={filter} className={styles.filterTagItem}>
              <span className={styles.filterTagName}>{filter}</span>
              <button 
                className={styles.removeBtn}
                onClick={() => removeFilter(filter)}
                aria-label={`Remove ${filter} filter`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/icon-remove.svg" alt="Remove" />
              </button>
            </div>
          ))}
        </div>
        <button 
          className={styles.clearBtn}
          onClick={clearFilters}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
