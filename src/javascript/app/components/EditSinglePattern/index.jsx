import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImagePreview from '../ImagePreview';
import PatternMaker from '../PatternMaker';
import { patternToC } from '../../../../tools/toC.mjs';
import './index.scss';

function EditSinglePattern({
  imageData,
}) {
  const [pattern, setPattern] = useState([]);

  return (
    <div
      className="edit-single-pattern"
    >
      <ImagePreview
        imageData={imageData}
        pattern={pattern}
      />
      <PatternMaker
        onPatternUpdate={setPattern}
      />
      <code
        className="edit-single-pattern__c-pattern"
      >
        { patternToC(pattern) }
      </code>
    </div>
  );
}


EditSinglePattern.propTypes = {
  imageData: PropTypes.object,
};

EditSinglePattern.defaultProps = {
  imageData: null,
};

export default EditSinglePattern;
