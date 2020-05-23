import React from "react";
import { StyledContentWrapper, StyledContentDiv } from "./content.styles";
export const ContentWrapper = ({ children }) => {
  return (
    <StyledContentWrapper data-test-id="content-wrapper">
      {children}
    </StyledContentWrapper>
  );
};

export const ContentWrapperDiv = ({ children, direction }) => {
  return (
    <StyledContentDiv data-test-id="content-wrapper-div" direction={direction}>
      {children}
    </StyledContentDiv>
  );
};
