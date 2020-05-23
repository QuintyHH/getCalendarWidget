import styled from "styled-components";

export const StyledTextLabel = styled.div`
  box-sizing: border-box;
  min-width: max-content;
  font-weight: ${(prop) => (prop.weight ? prop.weight : "normal")};
  font-size: ${(prop) => (prop.size ? prop.size : "1rem")};
  color: #00357c;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
`;
