import React, { useState } from 'react';
import ImagesPreview from '../ImagesPreview';
import PatternPreview from '../PatternPreview';
import OrderValuesSet from '../OrderValuesSet';
import CubicValues from '../CubicValues';
import GroupCodePreview from '../GroupCodePreview';
import generateBaseValues from '../../../../generateBaseValues.mjs';
import { flip } from '../../../../generatePatternBaseValues.mjs';
import { orderPatternDither } from '../../../../data/orderPatterns.mjs';
import { boundaryColors } from '../PatternPreview/drawPattern';
import './index.scss';

const defaultCurves = [
  [-0.03, 1.65, 128.7],
  [-0.03, 0.55, 145],
  [0.045, -3.985, 196.6],
  [-0.13, -3.865, 233.55],
];

const cubicToBases = ([a, b, c]) => (
  (new Array(16))
    .fill(null)
    .map((_, index) => (
      (a * (index ** 2)) + (b * index) + c
    ))
    .map((value) => parseInt(value, 10))
    .map((value) => Math.min(255, Math.max(0, value)))
);

function EditPatternGroup() {
  const [cubeBases, setCubeBases] = useState(defaultCurves);

  const [orderPatterns, setOrderPatterns] = useState([
    orderPatternDither,
    orderPatternDither,
    orderPatternDither,
  ]);

  const boundaries = flip(cubeBases.map(cubicToBases));
  const baseValues = boundaries.map(generateBaseValues);

  return (
    <div
      className="edit-group-pattern"
    >
      <ImagesPreview
        baseValues={baseValues}
      />
      <PatternPreview
        groupBaseValues={baseValues}
        boundaries={boundaries}
      />
      <div className="edit-group-pattern__curves">
        {
          cubeBases.map((values, index) => (
            <CubicValues
              color={boundaryColors[index]}
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
      <GroupCodePreview groupBaseValues={baseValues} />
    </div>
  );
}

EditPatternGroup.propTypes = {};

EditPatternGroup.defaultProps = {};

export default EditPatternGroup;
