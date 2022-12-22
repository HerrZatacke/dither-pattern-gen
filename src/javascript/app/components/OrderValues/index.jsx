import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function OrderValues({
  orderPattern,
  onOrderPatternUpdate,
  disabled,
}) {
  return (
    <div className="order-values">
      {
        orderPattern.map((value, index) => (
          <input
            key={index}
            className={`order-values__value order-values__value--${disabled ? 'disabled' : 'enabled'}`}
            type="number"
            min={0}
            max={15}
            value={value}
            disabled={disabled}
            onChange={({ target }) => {
              const newOrderPattern = [...orderPattern];
              newOrderPattern[index] = Math.min(15, Math.max(0, parseInt(target.value, 10) || 0));
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
  disabled: PropTypes.bool,
};

OrderValues.defaultProps = {
  disabled: false,
};

export default OrderValues;
