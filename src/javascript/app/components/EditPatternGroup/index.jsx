import React, { useState } from 'react';
import ImagesPreview from '../ImagesPreview';
import PatternPreview from '../PatternPreview';
import OrderValuesSet from '../OrderValuesSet';
import generateBaseValues from '../../../../generateBaseValues.mjs';
// import { ditherHighLightValues } from '../../../../data/patternBases.mjs';
import { orderPatternDither } from '../../../../data/orderPatterns.mjs';
import './index.scss';
import BezierValues from '../BezierValues';
import getCubicBezierY from './getCubicBezierY';
import { flip } from '../../../../generatePatternBaseValues.mjs';

const defaultCurves = [
  {
    values: [
      0.367,
      0.542,
      0.644,
      0.689,
    ],
    start: 128,
    end: 146,
  },
  {
    values: [
      0.412,
      0.796,
      0.220,
      0.909,
    ],
    start: 143,
    end: 146,
  },
  {
    values: [
      0.389,
      0.621,
      0.672,
      0.474,
    ],
    start: 181,
    end: 142,
  },
  {
    values: [
      0.581,
      0.915,
      0.423,
      0.338,
    ],
    start: 225,
    end: 140,
  },
];

const bezierToBases = (bezierBases) => {
  const curve = getCubicBezierY(...bezierBases.values);
  const width = bezierBases.end - bezierBases.start;

  return (new Array(16))
    .fill(null)
    .map((_, index) => (
      Math.floor((curve(index * (1 / 16)) * width) + bezierBases.start)
    ))
    .map((value) => Math.min(255, Math.max(0, value)));
};

function EditPatternGroup() {
  const [bezierBases, setBezierBases] = useState(defaultCurves);

  const [orderPatterns, setOrderPatterns] = useState([
    orderPatternDither,
    orderPatternDither,
    orderPatternDither,
  ]);

  const b = flip(bezierBases.map(bezierToBases));

  return (
    <div
      className="edit-group-pattern"
    >
      <ImagesPreview
        baseValues={b.map(generateBaseValues)}
      />
      {/* <PatternPreview groupBaseValues={ditherHighLightValues.map(generateBaseValues)} /> */}
      <PatternPreview groupBaseValues={b.map(generateBaseValues)} />
      <div className="edit-group-pattern__curves">
        {
          bezierBases.map(({ values, start, end }, index) => (
            <BezierValues
              key={index}
              values={values}
              start={start}
              end={end}
              onUpdate={(newValues) => {
                const newBases = [...bezierBases];
                newBases[index] = newValues;
                setBezierBases(newBases);
              }}
            />
          ))
        }
      </div>
      <OrderValuesSet
        onOrderPatternUpdate={setOrderPatterns}
        orderPatterns={orderPatterns}
      />
    </div>
  );
}


EditPatternGroup.propTypes = {};

EditPatternGroup.defaultProps = {};

export default EditPatternGroup;
