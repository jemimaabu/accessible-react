import React, { useState, useEffect, useRef } from "react";
import { SelectComponent } from "./";
import styled from "styled-components";

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  padding: 10px;
  margin: 0 0 15px;
`;

const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 5px;
`;

export const SelectContainer = () => {
  const selectFocus = useRef(null);

  useEffect(() => {
    document.title = "Accessible React | Select";
    selectFocus.current.focus();
  });

  const options = ["Pikachu", "Charmander", "Squirtle"];
  const [value, setSelect] = useState("");

  const handleSelect = (value: string, e?: any) => {
    if (e && e.which !== 13) {
      return;
    }
    setSelect(value);
  };

  return (
    <>
      <StyledLabel htmlFor="native-select" ref={selectFocus}>
        Native Select:
      </StyledLabel>
      <StyledSelect id="native-select" placeholder="Select option">
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
      </StyledSelect>

      <StyledLabel htmlFor="custom-select" id="custom-label">
        Custom Select:
      </StyledLabel>
      <SelectComponent
        aria-labelledby="custom-label"
        placeholder="Favorite Pokemon"
        options={options}
        value={value}
        handleSelect={(value, e) => handleSelect(value, e)}
        id="custom-select"
      />
    </>
  );
};
