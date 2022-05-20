import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  onGood,
  onNeutral,
  onBad,
  totalFeedback,
  countPositive,
}) => {
  return (
    <div>
      <ul>
        <li>Good:{onGood}</li>
        <li>Neutral:{onNeutral}</li>
        <li>Bad:{onBad}</li>
        <li>Total:{totalFeedback}</li>
        <li>Positive feedback:{countPositive}%</li>
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
