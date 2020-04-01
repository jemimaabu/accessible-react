/** @jsx jsx */
import React, { useEffect, useState } from "react";
import { NavLink, BrowserRouter as Router, Route } from "react-router-dom";
import { SelectContainer, ButtonContainer, TabsContainer } from "../components";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { css, jsx } from "@emotion/core";
import { spacing, colors, lightTheme, darkTheme } from "../styles";

const GlobalStyle = createGlobalStyle<{ theme: any }>`
  body {
    margin: 0;
    font-family: 'Lato', sans-serif;
    background-color: ${({ theme }) => theme.bgColor};
    color:  ${({ theme }) => theme.color};
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

const StyledSpan = styled.span`
  position: absolute;
  left: 15px;
`;

const StyledToggle = styled.button`
  border: none;
  background-color: transparent;
  color: inherit;
  cursor: pointer;

  &.active {
    color: ${colors.green};
  }
`;

export default function App() {
  useEffect(() => {
    document.title = "Accessible React";
  });

  const [colorScheme, setColorScheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  const setTheme = (color: string) => {
    setColorScheme(color);
    localStorage.setItem("theme", color);
  };
  return (
    <ThemeProvider theme={colorScheme === "dark" ? darkTheme : lightTheme}>
      <div css={styles.appPage}>
        <GlobalStyle />
        <header>
          <StyledSpan className="theme-toggle">
            <StyledToggle
              className={colorScheme === "dark" && "active"}
              onClick={() => setTheme("dark")}
            >
              Dark
            </StyledToggle>{" "}
            /{" "}
            <StyledToggle
              className={colorScheme === "light" && "active"}
              onClick={() => setTheme("light")}
            >
              Light
            </StyledToggle>
          </StyledSpan>
          <h1>Accessible React</h1>
        </header>
        <Router>
          <StyledNav>
            <NavLink to="/button" activeClassName="active">
              Button
            </NavLink>
            <NavLink to="/select" activeClassName="active">
              Select
            </NavLink>
            <NavLink to="/tabs" activeClassName="active">
              Tabs
            </NavLink>
          </StyledNav>
          <StyledMain>
            <Route exact path="/" component={ButtonContainer} />
            <Route path="/button" component={ButtonContainer} />
            <Route path="/select" component={SelectContainer} />
            <Route path="/tabs" component={TabsContainer} />
          </StyledMain>
        </Router>
      </div>
    </ThemeProvider>
  );
}

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
