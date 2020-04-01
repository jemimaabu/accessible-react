import React, { useState, useEffect } from "react";
import { TableComponent } from "./";
import styled from "styled-components";

export const TableContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Table";
  });

  const StyledTable = styled.table`
    width: 100%;
    background-color: white;
    text-align: center;
    color: black;
    border-collapse: collapse;

    th,
    td {
      padding: 10px;
      border: 1px solid black;
      border-collapse: collapse;
    }

    caption {
      text-align: left;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.color};
    }
  `;

  return (
    <>
      <StyledTable>
        <caption>Native Table:</caption>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content 1</td>
            <td>Content 2</td>
          </tr>
        </tbody>
      </StyledTable>
    </>
  );
};
