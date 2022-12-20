import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import applyBitmapFilter from '../../../../tools/applyBitmapFilter';

function ImagePreview({
  imageData,
  pattern,
}) {
  const canvas = useRef(null);
  const originalCanvas = useRef(null);

  useEffect(() => {
    if (canvas.current && originalCanvas.current) {
      applyBitmapFilter({
        targetCanvas: canvas.current,
        originalCanvas: originalCanvas.current,
        imageData: imageData.imageData,
        matrix: pattern,
      });
    }
  });

  const { width, height } = imageData;

  if (!imageData || !width || !height) {
    return null;
  }

  return (
    <div className="image-preview">
      <canvas
        className="import-preview-image__canvas"
        width={width}
        height={height}
        ref={originalCanvas}
      />
      <canvas
        className="import-preview-image__canvas"
        width={width}
        height={height}
        ref={canvas}
      />
    </div>
  );
}

ImagePreview.propTypes = {
  imageData: PropTypes.object.isRequired,
  pattern: PropTypes.array.isRequired,
};

export default ImagePreview;
