import React from 'react';
import './index.scss';
import FileInput from '../FileInput';
import EditSinglePattern from '../EditSinglePattern';
import EditPatternGroup from '../EditPatternGroup';
import Tabs from '../Tabs';

function App() {
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
      <FileInput />
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
        <EditSinglePattern />
        <EditPatternGroup />
      </Tabs>
    </div>
  );
}

App.propTypes = {
};

App.defaultProps = {
};

export default App;
