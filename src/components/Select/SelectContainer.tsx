import React, { useState, useEffect } from "react";
import { SelectComponent } from "./";
import styled from "styled-components";

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 0 0 15px;
`;

const StyledP = styled.p`
  margin-bottom: 5px;
`;

export const SelectContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Select";
  });

  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setSelect] = useState("");

  const handleSelect = (value: string, e?: any) => {
    if (e && e.which !== 13) {
      return;
    }
    setSelect(value);
  };

  return (
    <div>
      <StyledP>Native Select: </StyledP>
      <StyledSelect placeholder="Select option">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </StyledSelect>

      <StyledP>Custom Select: </StyledP>
      <SelectComponent
        options={options}
        value={value}
        onChange={(value, e) => handleSelect(value, e)}
        placeholder="Select option"
      />
    </div>
  );
};
