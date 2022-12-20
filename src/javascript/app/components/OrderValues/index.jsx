import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function OrderValues({
  orderPattern,
  onOrderPatternUpdate,
}) {
  return (
    <div className="order-values">
      {
        orderPattern.map((value, index) => (
          <input
            key={index}
            className="order-values__value"
            type="number"
            min={0}
            max={15}
            value={value}
            onChange={({ target }) => {
              const newOrderPattern = [...orderPattern];
              newOrderPattern[index] = parseInt(target.value, 10);
              onOrderPatternUpdate(newOrderPattern);
            }}
          />
        ))
      }
    </div>
  );
}

OrderValues.propTypes = {
  orderPattern: PropTypes.array.isRequired,
  onOrderPatternUpdate: PropTypes.func.isRequired,
};

OrderValues.defaultProps = {
};

export default OrderValues;
