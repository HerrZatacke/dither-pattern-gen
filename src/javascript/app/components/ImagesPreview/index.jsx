import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ImagePreview from '../ImagePreview';

function ImagesPreview({
  imageData,
  patterns,
}) {
  const [activePatternIndex, setActivePatternIndex] = useState(Math.floor(patterns.length / 2));
  if (!imageData?.width || !imageData?.height) {
    return null;
  }

  // const { width, height } = imageData;

  return (
    <div className="images-preview">
      <ImagePreview
        pattern={patterns[activePatternIndex]}
        imageData={imageData}
      />
      <div className="images-preview__buttons">
        { patterns?.map((_, index) => (
          <button
            type="button"
            className="images-preview__button"
            key={index}
            onMouseEnter={() => setActivePatternIndex(index)}
            onClick={() => setActivePatternIndex(index)}
          >
            { index }
          </button>
        ))}
      </div>
    </div>
  );
}

ImagesPreview.propTypes = {
  imageData: PropTypes.object,
  patterns: PropTypes.array.isRequired,
};

ImagesPreview.defaultProps = {
  imageData: null,
};

export default ImagesPreview;
