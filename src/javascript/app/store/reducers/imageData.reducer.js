import { SET_IMAGE_DATA } from '../actions';

const imageDataReducer = (value = null, action = {}) => {
  switch (action.type) {
    case SET_IMAGE_DATA:
      return action.payload;
    default:
      return value;
  }
};

export default imageDataReducer;
