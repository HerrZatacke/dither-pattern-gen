import React, { useState } from 'react';
import ImagesPreview from '../ImagesPreview';
import PatternPreview from '../PatternPreview';
import OrderValuesSet from '../OrderValuesSet';
import generateBaseValues from '../../../../generateBaseValues.mjs';
import { ditherHighLightValues } from '../../../../data/patternBases.mjs';
import { orderPatternDither } from '../../../../data/orderPatterns.mjs';
import './index.scss';
import { flip } from '../../../../generatePatternBaseValues.mjs';
import CubicValues from '../CubicValues';

const defaultCurves = [
  [-0.01, 1.25, 128],
  [-0.03, 0.55, 143],
  [0.045, -3.985, 194.6],
  [-0.13, -3.865, 231.55],
];

const cubicToBases = ([a, b, c]) => (
  (new Array(16))
    .fill(null)
    .map((_, index) => (
      (a * (index ** 2)) + (b * index) + c
    ))
    .map((value) => Math.min(255, Math.max(0, value)))
);

function EditPatternGroup() {
  const [cubeBases, setCubeBases] = useState(defaultCurves);

  const [orderPatterns, setOrderPatterns] = useState([
    orderPatternDither,
    orderPatternDither,
    orderPatternDither,
  ]);

  const baseSeeds = flip(cubeBases.map(cubicToBases));

  return (
    <div
      className="edit-group-pattern"
    >
      <ImagesPreview
        baseValues={baseSeeds.map(generateBaseValues)}
      />
      <PatternPreview groupBaseValues={ditherHighLightValues.map(generateBaseValues)} />
      <PatternPreview groupBaseValues={baseSeeds.map(generateBaseValues)} />
      <div className="edit-group-pattern__curves">
        {
          cubeBases.map((values, index) => (
            <CubicValues
              key={index}
              values={values}
              onUpdate={(newValues) => {
                const newBases = [...cubeBases];
                newBases[index] = newValues;
                setCubeBases(newBases);
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
