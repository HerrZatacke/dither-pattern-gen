import { combineReducers } from 'redux';
import imageDataReducer from './imageData.reducer';
import orderPatternsReducer from './orderPatterns.reducer';
import patternLockReducer from './patternLock.reducer';

export default combineReducers({
  imageData: imageDataReducer,
  orderPatterns: orderPatternsReducer,
  patternLock: patternLockReducer,
});
