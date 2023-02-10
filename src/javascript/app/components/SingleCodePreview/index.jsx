import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { patternToC } from '../../../../tools/toC.mjs';
import { patternToJs } from '../../../../tools/toJs.mjs';
import generatePattern from '../../../../generatePattern.mjs';
import generateBaseValues from '../../../../generateBaseValues.mjs';
import './index.scss';

function SingleCodePreview({
  baseValues,
}) {

  const orderPatterns = useSelector((state) => state.orderPatterns);

  const patterns = generatePattern({
    orderPatterns,
    baseValues: generateBaseValues(baseValues),
  });

  return (
    <div className="single-code-preview">
      <code
        className="single-code-preview__pattern"
      >
        { patternToC(patterns) }
      </code>
      <code
        className="single-code-preview__pattern"
      >
        { patternToJs(patterns) }
      </code>
    </div>
  );
}

SingleCodePreview.propTypes = {
  baseValues: PropTypes.array.isRequired,
};

SingleCodePreview.defaultProps = {};

export default SingleCodePreview;
