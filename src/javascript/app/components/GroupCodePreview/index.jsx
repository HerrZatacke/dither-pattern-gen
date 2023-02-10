import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { patternToC } from '../../../../tools/toC.mjs';
import { patternToJs } from '../../../../tools/toJs.mjs';
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
    ));
  const cPatterns = patterns.map(patternToC);
  const jsPatterns = patterns.map(patternToJs);

  return (
    <div className="group-code-preview">
      <pre
        className="group-code-preview__pattern"
      >
        { `{\n${cPatterns.join(', \n')}\n}` }
      </pre>
      <pre
        className="group-code-preview__pattern"
      >
        { `[\n${jsPatterns.join(', \n')}\n]` }
      </pre>
    </div>
  );
}

GroupCodePreview.propTypes = {
  groupBaseValues: PropTypes.array.isRequired,
};

GroupCodePreview.defaultProps = {};

export default GroupCodePreview;
