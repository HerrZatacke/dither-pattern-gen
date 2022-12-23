import { SET_PATTERN_LOCK } from '../actions';

const patternLockReducer = (value = true, action = {}) => {
  switch (action.type) {
    case SET_PATTERN_LOCK:
      return action.payload;
    default:
      return value;
  }
};

export default patternLockReducer;
