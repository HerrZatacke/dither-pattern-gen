import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Tabs({
  children,
  labels,
}) {
  const [activeTab, setActiveTab] = useState(children[0].key);

  const activeChild = (children.find(({ key }) => (key === activeTab)));

  return (
    <div className="tabs">
      <div className="tabs__buttons">
        { labels.map(({ label, key }) => (
          <button
            className={`tabs__button ${key === activeTab ? 'tabs__button--active' : ''}`}
            key={key}
            type="button"
            onClick={() => {
              setActiveTab(key);
            }}
          >
            { label }
          </button>
        ))}
      </div>
      <div className="tabs__tabs-content">
        { activeChild }
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
