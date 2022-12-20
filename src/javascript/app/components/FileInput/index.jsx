import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import getImageData from './getImageData';

function FileInput({
  onImageDataChange,
}) {
  const onChange = async ({ target: inputField }) => {
    if (inputField.files.length) {
      const blob = new Blob([new Uint8Array(await inputField.files[0].arrayBuffer())]);
      getImageData(blob)
        .then((imageData) => {
          onImageDataChange(imageData);
        });
    } else {
      onImageDataChange(null);
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

FileInput.propTypes = {
  onImageDataChange: PropTypes.func.isRequired,
};

FileInput.defaultProps = {
};

export default FileInput;
