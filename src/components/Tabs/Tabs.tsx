/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../styles";

type Tab = {
  title: string;
  content: string;
};

interface ITabsProps {
  Tabs: Tab[];
}

export const TabsComponent = (props: ITabsProps) => {
  const { Tabs } = props;
  const [activeTab, setActive] = useState(0);

  return (
    <React.Fragment>
      <div css={styles.tabList} role="tablist">
        {Tabs.map((tab, i) => (
          <button
            css={styles.tab}
            role="tab"
            id={`tab_${i}`}
            key={`tab_${i}`}
            onClick={() => setActive(i)}
            aria-selected={activeTab === i}
            aria-controls={`content_${i}`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      {Tabs.map((tab, i) => (
        <div
          css={styles.tabPanel}
          id={`panel_${i}`}
          key={`panel_${i}`}
          aria-labelledby={`tab_${i}`}
          role="tabpanel"
          tabIndex={activeTab === i ? 0 : -1}
          hidden={activeTab !== i}
        >
          {tab.content}
        </div>
      ))}
    </React.Fragment>
  );
};

const styles = {
  tabList: css`
    width: 100%;
    display: flex;
  `,
  tab: css`
    padding: 10px 15px;
    background-color: white;
    border: 1px solid ${colors.grey};
    border-bottom-width: 0;
    margin-right: 2.5px;
    border-radius: 3px 3px 0 0;
    transition: 0.3s;
    position: relative;
    min-width: 75px;
    outline: 0;

    &:hover {
      background-color: #eaeaea;
    }

    &:focus {
      box-shadow: 0px 0px 4px 1px ${colors.green};
    }

    &[aria-selected="true"] {
      font-weight: bold;

      &:hover {
        background-color: white;
      }

      &::after {
        content: "";
        position: absolute;
        bottom: -3px;
        right: 0;
        left: 0;
        height: 0.3em;
        background: white;
      }
    }
  `,
  tabPanel: css`
    padding: 15px;
    background-color: white;
    color: black;
    border: 1px solid ${colors.grey};
    border-radius: 0 3px 3px 3px;
  `
};
