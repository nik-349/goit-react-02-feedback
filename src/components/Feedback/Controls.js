import React from 'react';
// import PropTypes from 'prop-types';

const Controls = ({ onHandleGood, onHandleNeutral, onHandleBad }) => {
  return (
    <div>
      <button type="button" onClick={onHandleGood}>
        Good
      </button>
      <button type="button" onClick={onHandleNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onHandleBad}>
        Bad
      </button>
    </div>
  );
};

export default Controls;
