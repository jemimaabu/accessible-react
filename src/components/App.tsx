/** @jsx jsx */
import React from "react";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { SelectContainer, Sidebar, Table } from "../components";
import styled, { createGlobalStyle } from "styled-components";
import { css, jsx } from "@emotion/core";
import { colors, spacing } from "../styles";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: ${colors.mainBg};
    color: white;
    box-sizing: border-box;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  margin: ${spacing.large};

  a {
    color: inherit;
    min-width: 75px;
    text-align: center;
    text-decoration: none;
    padding: ${spacing.small};
    margin: 0 ${spacing.small};
    border: 1px solid;
    transition: color 0.3s;

    &:hover {
      color: ${colors.red};
      filter: brightness(90%);
    }

    &.active {
      color: ${colors.red};
      filter: brightness(100%);
    }
  }
`;

const StyledMain = styled.main`
  width: 50%;
  max-width: 750px;
  margin: ${spacing.large} auto;
`;

export const App: React.FC = () => {
  return (
    <div css={styles.appPage}>
      <GlobalStyle />
      <h1>Accessible React</h1>
      <Router>
        <StyledNav>
          <NavLink to="/select" activeClassName="active">
            Select
          </NavLink>
          <NavLink to="/sidebar" activeClassName="active">
            Sidebar
          </NavLink>
          <NavLink to="/table" activeClassName="active">
            Table
          </NavLink>
        </StyledNav>
        <StyledMain>
          <Route path="/select" component={SelectContainer} />
          <Route path="/sidebar" component={Sidebar} />
          <Route path="/table" component={Table} />
        </StyledMain>
      </Router>
    </div>
  );
};

const styles = {
  appPage: css`
    padding: ${spacing.large};

    h1 {
      margin: 0 -${spacing.large} ${spacing.large};
      text-align: center;
      padding: 0 0 ${spacing.large};
      border-bottom: 2px solid ${colors.green};
    }
  `
};
