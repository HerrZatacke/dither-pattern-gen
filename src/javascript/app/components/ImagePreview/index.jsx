import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './index.scss';
import applyBitmapFilter from '../../../../tools/applyBitmapFilter';

function ImagePreview({
  baseValues,
}) {
  const canvas = useRef(null);
  const originalCanvas = useRef(null);

  const [imageData, orderPatterns] = useSelector((state) => [state.imageData, state.orderPatterns]);

  useEffect(() => {
    if (canvas.current && originalCanvas.current) {
      applyBitmapFilter({
        targetCanvas: canvas.current,
        originalCanvas: originalCanvas.current,
        imageData: imageData.imageData,
        orderPatterns,
        baseValues,
      });
    }
  });

  if (!orderPatterns?.length || !imageData?.width || !imageData?.height) {
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
      <span
        className="image-preview__arrow"
      >
        →
      </span>
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
  baseValues: PropTypes.array.isRequired,
};

ImagePreview.defaultProps = {};

export default ImagePreview;
