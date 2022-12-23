import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ORDER_PATTERNS, SET_PATTERN_LOCK } from '../../store/actions';
import OrderValues from '../OrderValues';
import './index.scss';

function OrderValuesSet() {
  const dispatch = useDispatch();
  const [patternLock, orderPatterns] = useSelector((store) => [store.patternLock, store.orderPatterns]);

  const setPatternLock = (lock) => dispatch({
    type: SET_PATTERN_LOCK,
    payload: lock,
  });

  const setOrderPatterns = (patterns) => dispatch({
    type: SET_ORDER_PATTERNS,
    payload: patterns,
  });

  const setOrderPattern = (index) => (pattern) => {
    if (patternLock) {
      setOrderPatterns([
        pattern,
        pattern,
        pattern,
      ]);
    } else {
      const newPatterns = [...orderPatterns];
      newPatterns[index] = pattern;
      setOrderPatterns(newPatterns);
    }
  };

  return (
    <>
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
    </>
  );
}

OrderValuesSet.propTypes = {};

OrderValuesSet.defaultProps = {};

export default OrderValuesSet;
