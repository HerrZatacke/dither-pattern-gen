import { SET_ORDER_PATTERNS, SET_PATTERN_LOCK } from '../actions';
import { orderPatternDither } from '../../../../data/orderPatterns.mjs';

const defaultPatterns = [
  orderPatternDither,
  orderPatternDither,
  orderPatternDither,
];

const orderPatternsReducer = (value = defaultPatterns, action = {}) => {
  switch (action.type) {
    case SET_ORDER_PATTERNS:
      return action.payload;
    case SET_PATTERN_LOCK:
      if (action.payload) {
        return [
          value[0],
          value[0],
          value[0],
        ];
      }

      return value;
    default:
      return value;
  }
};

export default orderPatternsReducer;
