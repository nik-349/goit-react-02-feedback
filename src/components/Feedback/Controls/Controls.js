import React from 'react';
// import PropTypes from 'prop-types';
import controls from './Controls.module.css';

const Controls = ({ options, onHandleGood }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <button
            key={option}
            className={controls.control}
            type="button"
            name={option}
            onClick={() => onHandleGood(option)}
          >
            {option}
          </button>
        );
      })}
    </ul>
  );
};

export default Controls;
