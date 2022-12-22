import React, { useEffect, useState } from 'react';
import './index.scss';
import FileInput from '../FileInput';
import EditSinglePattern from '../EditSinglePattern';
import EditPatternGroup from '../EditPatternGroup';
import Tabs from '../Tabs';
import getImageData from '../FileInput/getImageData';

function App() {
  const [sourceImageData, setSourceImageData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('./gradient.png');
      const blob = await res.blob();
      const imageData = await getImageData(blob);
      setSourceImageData(imageData);
    };

    fetchData();
  }, [setSourceImageData]);

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
          },
          {
            label: 'Pattern Group',
          },
        ]}
      >
        <EditSinglePattern
          imageData={sourceImageData}
        />
        <EditPatternGroup
          imageData={sourceImageData}
        />
        <div key="group" />
      </Tabs>
    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
