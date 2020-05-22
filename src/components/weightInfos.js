import React from 'react';
const WeightInfos = () => {
  return (
    <div className="weight-infos-box">
      <ul className="list-group">
        <li className="list-group-item">
          Weight <span></span>
        </li>
        <li className="list-group-item">
          Date <span></span>
        </li>
        <li className="list-group-item">
          Time <span></span>
        </li>
        <li className="list-group-item">
          Source <span></span>
        </li>
      </ul>

      <div className="weight-infos-message">your weight is good</div>
    </div>
  );
};

export default WeightInfos;
