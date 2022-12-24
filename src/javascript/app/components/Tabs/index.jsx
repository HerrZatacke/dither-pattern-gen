import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Tabs({
  children,
  labels,
}) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        { labels.map(({ label }, index) => (
          <button
            className={`tabs__button ${index === activeTabIndex ? 'tabs__button--active' : ''}`}
            key={index}
            type="button"
            onClick={() => {
              setActiveTabIndex(index);
            }}
          >
            { label }
          </button>
        ))}
      </div>
      <div className="tabs__tabs">
        { children.map((child, index) => (
          <div
            key={index}
            className={`tabs__tab ${index === activeTabIndex ? 'tabs__tab--active' : ''}`}
          >
            { child }
          </div>
        )) }
      </div>
    </div>
  );
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  labels: PropTypes.array.isRequired,
};

Tabs.defaultProps = {
};

export default Tabs;
