import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function CubicValues({
  values,
  color,
  onUpdate,
}) {

  const handleUpdate = (index) => ({ target: { value } }) => {
    const newValues = [...values];
    newValues[index] = parseFloat(value);
    onUpdate(newValues);
  };

  return (
    <div className="cubic-curve">
      <div
        className="cubic-curve__values"
        style={{ borderColor: color }}
      >
        <div
          className="cubic-curve__slider"
        >
          <input
            className="cubic-curve__slider-input"
            min={-1}
            max={1}
            step={0.005}
            type="range"
            value={values[0]}
            onChange={handleUpdate(0)}
          />
          <input
            className="cubic-curve__slider-value"
            type="number"
            min={-1}
            max={1}
            step={0.005}
            value={values[0]}
            onChange={handleUpdate(0)}
          />
        </div>
        <div
          className="cubic-curve__slider"
        >
          <input
            className="cubic-curve__slider-input"
            min={-20}
            max={20}
            step={0.005}
            type="range"
            value={values[1]}
            onChange={handleUpdate(1)}
          />
          <input
            className="cubic-curve__slider-value"
            type="number"
            min={-20}
            max={20}
            step={0.005}
            value={values[1]}
            onChange={handleUpdate(1)}
          />
        </div>
        <div
          className="cubic-curve__slider"
        >
          <input
            className="cubic-curve__slider-input"
            min={-500}
            max={500}
            step={0.05}
            type="range"
            value={values[2]}
            onChange={handleUpdate(2)}
          />
          <input
            className="cubic-curve__slider-value"
            type="number"
            min={-500}
            max={500}
            step={0.05}
            value={values[2]}
            onChange={handleUpdate(2)}
          />
        </div>
      </div>
    </div>
  );
}

CubicValues.propTypes = {
  values: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

CubicValues.defaultProps = {};

export default CubicValues;
