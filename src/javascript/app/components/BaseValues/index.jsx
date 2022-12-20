import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function BaseValues({
  patternBaseValues,
  onBaseValuesUpdate,
}) {

  return (
    <div className="base-values">
      <code className="base-values__values">
        { patternBaseValues.map((value) => (
          `0x${value.toString(16).padStart(2, '0')}`
        )).join(', ') }
      </code>
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[0]}
        min={0}
        max={patternBaseValues[1]}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            parseInt(target.value, 10),
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
        min={patternBaseValues[0]}
        max={patternBaseValues[2]}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            parseInt(target.value, 10),
            patternBaseValues[2],
            patternBaseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[2]}
        min={patternBaseValues[1]}
        max={patternBaseValues[3]}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            patternBaseValues[1],
            parseInt(target.value, 10),
            patternBaseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={patternBaseValues[3]}
        min={patternBaseValues[2]}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            patternBaseValues[0],
            patternBaseValues[1],
            patternBaseValues[2],
            parseInt(target.value, 10),
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
