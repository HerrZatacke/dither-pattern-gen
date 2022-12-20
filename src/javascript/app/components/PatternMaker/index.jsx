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
  const [patternBaseValues, setPatternBaseValues] = useState([0x01, 0x55, 0xAA, 0xFF]);
  const [orderPattern, setOrderPattern] = useState(orderPatternDither);

  useEffect(() => {
    onPatternUpdate(generatePattern({
      baseValues: generateBaseValues(patternBaseValues),
      orderPattern,
    }));
  }, [patternBaseValues, orderPattern, onPatternUpdate]);

  return (
    <div className="pattern-maker">
      <BaseValues
        patternBaseValues={patternBaseValues}
        onBaseValuesUpdate={setPatternBaseValues}
      />
      <OrderValues
        orderPattern={orderPattern}
        onOrderPatternUpdate={setOrderPattern}
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
