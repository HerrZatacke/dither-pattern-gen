import React, { useState } from 'react';
import './index.scss';
import FileInput from '../FileInput';
import ImagePreview from '../ImagePreview';
import PatternMaker from '../PatternMaker';

function App() {
  const [sourceImageData, setSourceImageData] = useState({});
  const [pattern, setPattern] = useState([]);
  return (
    <div className="app">
      <h2
        className="app__headline"
      >
        Dither pattern generator
      </h2>
      <FileInput
        onImageDataChange={setSourceImageData}
      />
      <ImagePreview
        imageData={sourceImageData}
        pattern={pattern}
      />
      <PatternMaker
        onPatternUpdate={setPattern}
      />
    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
