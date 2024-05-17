import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CustomSection from './CustomSection'; 

function CustomTab({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0].eventKey);
  const [forceShowAll, setForceShowAll] = useState(false);

  const handleSelect = (key) => {
    setActiveTab(key);
    setForceShowAll(false);
  };

  const handleShowAll = () => {
    setForceShowAll(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setActiveTab(activeTab => activeTab);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Tabs
      activeKey={activeTab}
      onSelect={handleSelect}
      id="custom-tab"
      className="mb-3"
      justify
    >
      {tabs.map(tab => (
        <Tab
          key={tab.eventKey}
          eventKey={tab.eventKey}
          title={tab.title}
          disabled={tab.disabled}
        >
          {Array.isArray(tab.content) ? (
            tab.content.map((content, index) => (
              <CustomSection
                key={index}
                forceShow={activeTab === tab.eventKey || forceShowAll}
              >
                {content}
              </CustomSection>
            ))
          ) : (
            <CustomSection forceShow={activeTab === tab.eventKey || forceShowAll}>
              {tab.content}
            </CustomSection>
          )}
        </Tab>
      ))}
    </Tabs>
  );
}

export default CustomTab;
