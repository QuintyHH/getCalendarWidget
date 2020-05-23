import React from "react";
import { StyledTextLabel } from "./textlabel.styles";
export const TextLabel = ({ children, weight, size }) => {
  return (
    <StyledTextLabel data-test-id="textlabel" weight={weight} size={size}>
      {children}
    </StyledTextLabel>
  );
};
