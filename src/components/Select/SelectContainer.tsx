import React, { useState } from "react";
import { Select } from "./";
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
  const options = ["Option 1", "Option 2", "Option 3"];
  const [value, setSelect] = useState("");

  const handleSelect = (value: string, e?: any) => {
    if (e && e.which !== 13) {
      console.log("should not Select");
      return;
    }

    e && console.log(e.which);
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
      <Select
        options={options}
        value={value}
        onChange={value => handleSelect(value)}
        placeholder="Select option"
      />
    </div>
  );
};
