import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { patternToC } from '../../../../tools/toC.mjs';
import generatePattern from '../../../../generatePattern.mjs';
import './index.scss';

function GroupCodePreview({
  groupBaseValues,
}) {

  const orderPatterns = useSelector((state) => state.orderPatterns);

  const patterns = groupBaseValues
    .map((baseValues) => (
      generatePattern({
        orderPatterns,
        baseValues,
      })
    ))
    .map(patternToC);

  return (
    <div className="group-code-preview">
      <pre
        className="group-code-preview__c-pattern"
      >
        { `{\n${patterns.join(', \n')}\n}` }
      </pre>
    </div>
  );
}

GroupCodePreview.propTypes = {
  groupBaseValues: PropTypes.array.isRequired,
};

GroupCodePreview.defaultProps = {};

export default GroupCodePreview;
