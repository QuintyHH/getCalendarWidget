import React, { useContext } from "react";
import { StyledWrapper } from "./main.styles";
import { ContentWrapper, ContentWrapperDiv } from "../content";
import { Button } from "../button";
import { MainContext } from "../../store";
import { Datepicker } from "../datepicker";
import { TextLabel } from "../textlabel";
import {
  buttonUpdateHoverAction,
  trackEventSubmitAction,
} from "../../store/actions";

export const Main = () => {
  const { state, dispatch } = useContext(MainContext);

  const handleSubmitClick = () => {
    dispatch(trackEventSubmitAction(new Date().toGMTString()));
    state.picker.date
      ? alert(
          `Thank you for selecting a date! The date you picked is ${state.picker.formattedDate}`
        )
      : alert(`Please pick a date first!`);
  };

  const updateState = (action, value) => {
    dispatch(action(value));
  };

  return (
    <StyledWrapper data-test-id="wrapper">
      <ContentWrapper>
        <ContentWrapperDiv direction={"column"}>
          <TextLabel weight="bold" size="20px">
            Have you sold subject to contract?
          </TextLabel>
          <TextLabel weight="normal" size="16px">
            Enter your exchange date to unlock the tools you need for the next
            stage of your sale.
          </TextLabel>
        </ContentWrapperDiv>
        <ContentWrapperDiv>
          <Datepicker />
          <Button
            radius={"4px"}
            margin={"0 1rem"}
            background={"#006cfa"}
            padding={"1rem 2rem"}
            hover={state.button.hover}
            onMouseEnter={() => updateState(buttonUpdateHoverAction, true)}
            onMouseLeave={() => updateState(buttonUpdateHoverAction, false)}
            onClick={handleSubmitClick}
          >
            Submit
          </Button>
        </ContentWrapperDiv>
      </ContentWrapper>
    </StyledWrapper>
  );
};
