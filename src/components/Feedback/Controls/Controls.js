import React from 'react';
import PropTypes from 'prop-types';
import controls from './Controls.module.css';
import classNames from 'classnames';

const Controls = ({ options, onHandleGood }) => {
  return (
    <ul>
      {options.map(option => {
        return (
          <button
            key={option}
            className={classNames(controls.control)}
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

Controls.propTypes = {
  onHandleGood: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default Controls;
