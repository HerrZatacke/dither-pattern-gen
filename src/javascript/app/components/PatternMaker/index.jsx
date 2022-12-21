import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import BaseValues from '../BaseValues';
import { orderPatternDither } from '../../../../data/orderPatterns.mjs';
import OrderValues from '../OrderValues';
import generatePattern from '../../../../generatePattern.mjs';
import generateBaseValues from '../../../../generateBaseValues.mjs';

function PatternMaker({
  onPatternUpdate,
}) {
  const [patternLock, setPatternLock] = useState(true);
  const [patternBaseValues, setPatternBaseValues] = useState([0x01, 0x55, 0xAA, 0xFF]);
  const [orderPatterns, setOrderPatterns] = useState([
    orderPatternDither,
    orderPatternDither,
    orderPatternDither,
  ]);

  const setOrderPattern = (index) => (pattern) => {
    if (patternLock) {
      setOrderPatterns([
        pattern,
        pattern,
        pattern,
      ]);
    } else {
      const newPattern = [...orderPatterns];
      newPattern[index] = pattern;
      setOrderPatterns(newPattern);
    }
  };

  useEffect(() => {
    if (patternLock) {
      setOrderPatterns([
        orderPatterns[0],
        orderPatterns[0],
        orderPatterns[0],
      ]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [patternLock]);

  useEffect(() => {
    onPatternUpdate(generatePattern({
      baseValues: generateBaseValues(patternBaseValues),
      orderPatterns,
    }));
  }, [patternBaseValues, orderPatterns, onPatternUpdate]);

  return (
    <div className="pattern-maker">
      <BaseValues
        patternBaseValues={patternBaseValues}
        onBaseValuesUpdate={setPatternBaseValues}
      />
      <OrderValues
        orderPattern={orderPatterns[0]}
        onOrderPatternUpdate={setOrderPattern(0)}
      />
      <label className="pattern-maker__checkbox">
        <input
          type="checkbox"
          checked={!patternLock}
          onChange={({ target }) => {
            setPatternLock(!target.checked);
          }}
        />
        <span>
          Use separate patterns
        </span>
      </label>
      <OrderValues
        orderPattern={orderPatterns[1]}
        onOrderPatternUpdate={setOrderPattern(1)}
        disabled={patternLock}
      />
      <OrderValues
        orderPattern={orderPatterns[2]}
        onOrderPatternUpdate={setOrderPattern(2)}
        disabled={patternLock}
      />
    </div>
  );
}

PatternMaker.propTypes = {
  onPatternUpdate: PropTypes.func.isRequired,
};

PatternMaker.defaultProps = {
};

export default PatternMaker;
