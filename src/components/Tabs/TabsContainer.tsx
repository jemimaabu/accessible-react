import React, { useEffect } from "react";
import styled from "styled-components";
import { TabsComponent } from "./Tabs";

export const TabsContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Tabs";
  });

  return (
    <TabsComponent
      Tabs={[
        { title: "Tab 1", content: "Content 1" },
        { title: "Tab 2", content: "Content 2" }
      ]}
    />
  );
};
