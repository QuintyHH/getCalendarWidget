import styled from "styled-components";

export const StyledContentWrapper = styled.div`
  margin: auto;
  box-sizing: border-box;
  min-width: fit-content;
  border-radius: 4px;
  border: solid 2px #00357c;
  display: grid;
  grid-template-columns: auto auto;
  min-height: 140px;
  min-width: max-content;
`;

export const StyledContentDiv = styled.div`
  margin: auto 2rem;
  box-sizing: border-box;
  width: fit-content;
  display: flex;
  flex-direction: ${(prop) => (prop.direction ? prop.direction : "initial")};
`;
