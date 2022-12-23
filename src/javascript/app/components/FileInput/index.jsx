import React from 'react';
import './index.scss';
import { useDispatch } from 'react-redux';
import getImageData from './getImageData';
import { SET_IMAGE_DATA } from '../../store/actions';

function FileInput() {

  const dispatch = useDispatch();

  const onChange = async ({ target: inputField }) => {
    if (inputField.files.length) {
      console.log(1, Date.now());
      const blob = new Blob([new Uint8Array(await inputField.files[0].arrayBuffer())]);
      getImageData(blob)
        .then((imageData) => {
          dispatch({
            type: SET_IMAGE_DATA,
            payload: imageData,
          });
        });
    } else {
      dispatch({
        type: SET_IMAGE_DATA,
        payload: null,
      });
    }
  };

  return (
    <div className="file-input">
      <input
        type="file"
        onChange={onChange}
      />
    </div>
  );
}

FileInput.propTypes = {};

FileInput.defaultProps = {};

export default FileInput;
