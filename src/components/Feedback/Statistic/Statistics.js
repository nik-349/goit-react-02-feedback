import React from 'react';
import PropTypes from 'prop-types';
import statistic from './Statistic.module.css';

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  totalFeedback,
  countPositive,
}) => {
  return (
    <div>
      <ul className={statistic.listStatistic}>
        <li>
          <p>Good:{onGood}</p>
        </li>
        <li>
          <p>Neutral:{onNeutral}</p>
        </li>
        <li>
          <p>Bad:{onBad}</p>
        </li>
        <li>
          <p>Total:{totalFeedback}</p>
        </li>
        <li>
          <p>Positive feedback:{countPositive}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.protoType = {
  onGood: PropTypes.number,
  onNeutral: PropTypes.number,
  onBad: PropTypes.number,
  totalFeedback: PropTypes.number,
  countPositive: PropTypes.number,
};
export default Statistics;
