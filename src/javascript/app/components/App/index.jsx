import React, { useState } from 'react';
import './index.scss';
import FileInput from '../FileInput';
import ImagePreview from '../ImagePreview';
import PatternMaker from '../PatternMaker';
import Tabs from '../Tabs';
import { patternToC } from '../../../../tools/toC.mjs';

function App() {
  const [sourceImageData, setSourceImageData] = useState({});
  const [pattern, setPattern] = useState([]);
  return (
    <div className="app">
      <h2
        className="app__headline"
      >
        Dither pattern generator
        <sub>
          <a
            className="app__doc-link"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/HerrZatacke/dither-pattern-gen"
          >
            [Docs]
          </a>
        </sub>
      </h2>
      <FileInput
        onImageDataChange={setSourceImageData}
      />
      <Tabs
        labels={[
          {
            label: 'Single Pattern',
            key: 'single',
          },
          {
            label: 'Pattern Group',
            key: 'group',
          },
        ]}
      >
        <div key="single">
          <ImagePreview
            imageData={sourceImageData}
            pattern={pattern}
          />
          <PatternMaker
            onPatternUpdate={setPattern}
          />
          <code className="app__c-pattern">
            { patternToC(pattern) }
          </code>
        </div>
        <div key="group">
          <p>To be implemented...</p>
        </div>
      </Tabs>
    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
