/** @jsx jsx */
import { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { colors } from "../../styles";

interface ITableProps {}

export const Table = (props: ITableProps) => {
  useEffect(() => {
    document.title = "Accessible React | Table";
  });
  return <div>Table</div>;
};
