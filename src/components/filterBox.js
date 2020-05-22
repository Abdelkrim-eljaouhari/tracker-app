import React from 'react';
const FilterBox = () => {
  return (
    <div className="filter-box">
      <ul className="list-group">
        <li className="list-group-item">Filter</li>
        <li className="list-group-item">This week</li>
        <li className="list-group-item">This month</li>
        <li className="list-group-item">This year</li>
        <li className="list-group-item">custom</li>
        <li className="list-group-item">Cancel</li>
      </ul>
    </div>
  );
};

export default FilterBox;
