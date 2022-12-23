import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function BaseValues({
  baseValues,
  onBaseValuesUpdate,
}) {

  return (
    <div className="base-values">
      <div className="base-values__values">
        { baseValues.map((value, index) => (
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
        value={baseValues[0]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            Math.max(0, Math.min(baseValues[1], parseInt(target.value, 10))),
            baseValues[1],
            baseValues[2],
            baseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={baseValues[1]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            baseValues[0],
            Math.max(baseValues[0], Math.min(baseValues[2], parseInt(target.value, 10))),
            baseValues[2],
            baseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={baseValues[2]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            baseValues[0],
            baseValues[1],
            Math.max(baseValues[1], Math.min(baseValues[3], parseInt(target.value, 10))),
            baseValues[3],
          ]);
        }}
      />
      <input
        type="range"
        className="base-values__slider"
        value={baseValues[3]}
        min={0}
        max={255}
        onChange={({ target }) => {
          onBaseValuesUpdate([
            baseValues[0],
            baseValues[1],
            baseValues[2],
            Math.max(baseValues[2], Math.min(255, parseInt(target.value, 10))),
          ]);
        }}
      />
    </div>
  );
}

BaseValues.propTypes = {
  onBaseValuesUpdate: PropTypes.func.isRequired,
  baseValues: PropTypes.array.isRequired,
};

BaseValues.defaultProps = {
};

export default BaseValues;
