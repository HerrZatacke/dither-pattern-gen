import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
import drawPattern from './drawPattern';

function PatternPreview({
  groupBaseValues,
}) {
  const canvas = useRef(null);

  useEffect(() => {
    drawPattern({
      canvas: canvas.current,
      values: groupBaseValues,
    });
  });

  return (
    <div className="pattern-preview">
      <canvas
        ref={canvas}
        className="pattern-preview__canvas"
        width={1024 + 16}
        height={(groupBaseValues.length * 4) + 16}
      />
    </div>
  );
}

PatternPreview.propTypes = {
  groupBaseValues: PropTypes.array.isRequired,
};

PatternPreview.defaultProps = {
};

export default PatternPreview;
