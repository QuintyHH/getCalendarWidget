import React from "react";
import styled from "styled-components";

const SButtonWrapper = styled.div`
  justify-content: center;
  color: ${(prop) => (prop.color ? prop.color : "#ffffff")};
  box-sizing: border-box;
  justify-content: center;
  display: flex;
  width: ${(prop) => (prop.width ? prop.width : "max-content")};
  height: ${(prop) => (prop.height ? prop.height : "auto")};
  padding: ${(prop) => (prop.padding ? prop.padding : "1rem")};
  background-color: ${(prop) => prop.background};
  border-radius: ${(prop) => (prop.radius ? prop.radius : "50px")};
  margin: ${(prop) => (prop.margin ? prop.margin : "auto")};
  cursor: pointer;
  font-weight: bold;
`;

const SButtonText = styled.div`
  margin: auto;
  font-size: 1rem;
  text-decoration: none;
  color: ${(prop) => (prop.hover ? "#00357c" : "#ffffff")};
  transition: 0.2s;
  text-shadow: 1px 1px 1px rgba(0, 28, 64, 0.25);
`;

const SButtonIcon = styled.div`
  background-image: url(${(prop) => (prop.icon ? prop.icon : null)});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin: auto 0.5rem;
  height: 1.5rem;
  width: 1.5rem;
`;

export const StyledButton = ({
  children,
  icon,
  radius,
  background,
  width,
  padding,
  height,
  margin,
  color,
  onClick,
  onSubmit,
  onMouseEnter,
  onMouseLeave,
  hover,
}) => {
  return (
    <SButtonWrapper
      data-test-id="button"
      background={background}
      radius={radius}
      width={width}
      height={height}
      padding={padding}
      margin={margin}
      color={color}
      onClick={onClick}
      onSubmit={onSubmit}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      hover={hover}
    >
      {icon ? (
        <SButtonIcon data-test-id="button-icon" icon={icon}></SButtonIcon>
      ) : null}
      <SButtonText data-test-id="button-text" hover={hover}>
        {children}
      </SButtonText>
    </SButtonWrapper>
  );
};
