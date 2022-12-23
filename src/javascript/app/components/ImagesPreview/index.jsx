import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import ImagePreview from '../ImagePreview';

function ImagesPreview({
  baseValues,
}) {
  const [activePatternIndex, setActivePatternIndex] = useState(Math.floor(baseValues.length / 2));

  // const { width, height } = imageData;

  return (
    <div className="images-preview">
      <ImagePreview
        baseValues={baseValues[activePatternIndex]}
      />
      <div className="images-preview__buttons">
        { baseValues?.map((_, index) => (
          <button
            type="button"
            className={`images-preview__button ${index === activePatternIndex ? 'images-preview__button--active' : ''}`}
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
  baseValues: PropTypes.array.isRequired,
};

ImagesPreview.defaultProps = {};

export default ImagesPreview;
