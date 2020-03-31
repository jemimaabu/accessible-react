import React, { useState, useEffect } from "react";
import { ButtonComponent } from "./";
import styled from "styled-components";

const StyledButton = styled.button``;

const StyledP = styled.p`
  margin-bottom: 5px;
`;

export const ButtonContainer = () => {
  useEffect(() => {
    document.title = "Accessible React | Button";
  });

  let [nativeCount, setNative] = useState(0);
  let [customCount, setCustom] = useState(0);

  return (
    <div>
      <StyledP>Native Button: {nativeCount}</StyledP>
      <button onClick={() => setNative(++nativeCount)}>Button</button>
      <StyledP>Custom Button: {customCount}</StyledP>
      <ButtonComponent onClick={() => setCustom(++customCount)}>
        Click me
      </ButtonComponent>
    </div>
  );
};
