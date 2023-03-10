import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import { drawPattern } from './drawPattern';

function PatternPreview({
  groupBaseValues,
  boundaries,
}) {
  const canvas = useRef(null);

  useEffect(() => {
    drawPattern({
      canvas: canvas.current,
      values: groupBaseValues,
      boundaries,
    });
  });

  return (
    <div className="pattern-preview">
      <canvas
        ref={canvas}
        className="pattern-preview__canvas"
        width={1024 + 16}
        height={(groupBaseValues.length * 8) + 12}
      />
    </div>
  );
}

PatternPreview.propTypes = {
  groupBaseValues: PropTypes.array.isRequired,
  boundaries: PropTypes.array.isRequired,
};

PatternPreview.defaultProps = {
};

export default PatternPreview;
