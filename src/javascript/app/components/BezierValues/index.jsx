import React from 'react';
import PropTypes from 'prop-types';
import { BezierCurveEditor } from 'react-bezier-curve-editor';
import './index.scss';

function BezierValues({
  values,
  start,
  end,
  onUpdate,
}) {
  return (
    <div className="bezier-curve">
      <div className="bezier-curve__curve-editor">
        <BezierCurveEditor
          size={177}
          outerAreaSize={0}
          onChange={(newValues) => {
            onUpdate({
              values: newValues,
              start,
              end,
            });
          }}
          value={values}
          outerAreaColor="#ddeeff"
          startHandleColor="#112244"
          endHandleColor="#112244"
          innerAreaColor="#ffffff"
          rowColor="#ffffff"
          fixedHandleColor="#ddeeff"
          curveLineColor="#112244"
          handleLineColor="#112244"
          strokeWidth={1}
        />
      </div>
      <div className="bezier-curve__offsets">
        <input
          className="bezier-curve__slider"
          min={0}
          max={225}
          type="range"
          value={start}
          onChange={({ target: { value } }) => {
            onUpdate({
              values,
              start: parseInt(value, 10),
              end,
            });
          }}
        />
        <input
          className="bezier-curve__slider"
          min={0}
          max={225}
          type="range"
          value={end}
          onChange={({ target: { value } }) => {
            onUpdate({
              values,
              start,
              end: parseInt(value, 10),
            });
          }}
        />
      </div>
    </div>
  );
}

BezierValues.propTypes = {
  values: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  end: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

BezierValues.defaultProps = {};

export default BezierValues;
