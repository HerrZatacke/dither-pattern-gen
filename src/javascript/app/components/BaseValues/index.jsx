import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function BaseValues({
  patternBaseValues,
  onBaseValuesUpdate,
}) {

  return (
    <div className="base-values">
      <div className="base-values__values">
        { patternBaseValues.map((value, index) => (
          <code
            key={index}
            className="base-values__value"
          >
            { `0x${value.toString(16).padStart(2, '0')}` }
          </code>
        )) }
      </div>
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[0]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            Math.max(0, Math.min(patternBaseValues[1], parseInt(target.value, 10))),
            patternBaseValues[1],
            patternBaseValues[2],
            patternBaseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[1]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            Math.max(patternBaseValues[0], Math.min(patternBaseValues[2], parseInt(target.value, 10))),
            patternBaseValues[2],
            patternBaseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[2]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            patternBaseValues[1],
            Math.max(patternBaseValues[1], Math.min(patternBaseValues[3], parseInt(target.value, 10))),
            patternBaseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[3]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            patternBaseValues[1],
            patternBaseValues[2],
            Math.max(patternBaseValues[2], Math.min(255, parseInt(target.value, 10))),
          ]);
        }}
      />
    </div>
  );
}

BaseValues.propTypes = {
  onBaseValuesUpdate: PropTypes.func.isRequired,
  patternBaseValues: PropTypes.array.isRequired,
};

BaseValues.defaultProps = {
};

export default BaseValues;
