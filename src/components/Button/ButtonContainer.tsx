import React, { useState, useEffect } from "react";
import { ButtonComponent } from "./";
import styled from "styled-components";

const StyledLabel = styled.label`
  display: block;
  margin: 15px 0 5px;
`;

export const ButtonContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Button";
  });

  let [nativeCount, setNative] = useState(0);
  let [customCount, setCustom] = useState(0);

  return (
    <>
      <StyledLabel htmlFor="native-button">
        Native Button: {nativeCount}
      </StyledLabel>
      <button id="native-button" onClick={() => setNative(++nativeCount)}>
        Increase count
      </button>

      <StyledLabel htmlFor="custom-button">
        Custom Button: {customCount}
      </StyledLabel>
      <ButtonComponent
        id="custom-button"
        onClick={() => setCustom(++customCount)}
      >
        Increase count
      </ButtonComponent>
    </>
  );
};
