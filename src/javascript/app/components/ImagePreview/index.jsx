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
        pattern,
      });
    }
  });

  if (!pattern?.length || !imageData?.width || !imageData?.height) {
    return null;
  }

  const { width, height } = imageData;

  return (
    <div className="image-preview">
      <canvas
        className="image-preview__canvas"
        width={width}
        height={height}
        ref={originalCanvas}
      />
      <canvas
        className="image-preview__canvas"
        width={width}
        height={height}
        ref={canvas}
      />
    </div>
  );
}

ImagePreview.propTypes = {
  imageData: PropTypes.object,
  pattern: PropTypes.array,
};

ImagePreview.defaultProps = {
  imageData: null,
  pattern: null,
};

export default ImagePreview;
