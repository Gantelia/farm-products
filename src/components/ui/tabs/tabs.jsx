import React, { useState } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles.js";

function Tabs({ tabsList = [], maxContentHeight }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div>
      <Header>
        {tabsList.map((tab, index) => (
          <TabListItem key={`tab${index * 10}`}>
            <TabButton
              $minWidth={90}
              $isActive={activeIndex === index}
              {...(activeIndex === index
                ? { as: "span" }
                : { onClick: () => setActiveIndex(index) })}
            >
              {tab.title}
            </TabButton>
          </TabListItem>
        ))}
      </Header>
      <Content $maxContentHeight={maxContentHeight}>
        {tabsList[activeIndex].content}
      </Content>
    </div>
  );
}

export default Tabs;
