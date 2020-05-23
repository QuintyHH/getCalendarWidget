import styled from "styled-components";

export const StyledPicker = styled.input`
  font-size: 16px;
  cursor: pointer;
  margin: auto;
  color: #00357c;
  height: 100%;
  box-sizing: border-box;
  padding-left: 10px;
  font-family: Roboto;
  border: 0px;

  &:focus {
    outline: none;
    cursor: pointer;
    opacity: 1;
  }
`;

export const StyledPickerAddon = styled.div`
  border-left: 2px solid #00357c;
  background-color: #bfdafd;
  color: white;
  width: 39px;
  cursor: pointer;
`;
export const Image = styled.img`
  display: block;
  margin: 1rem;
`;

export const StyledPickerWrapper = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: flex;
  border-radius: 4px;
  border: 2px solid #00357c;
`;

export const StyledPickerWidgetHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 42px auto 42px;
`;

export const StyledPickerButton = styled.div`
  height: 58px;
  position: relative;
  width: 42px;
  box-sizing: border-box;
  border-bottom: 1px solid rgba(0, 53, 124, 0.25);
  cursor: pointer;
`;

export const StyledCalendarContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledLeftArrow = styled.div`
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  border-left: 2px solid #006cfa;
  border-bottom: 2px solid #006cfa;
  position: absolute;
  transform: rotate(45deg);
  left: 50%;
  top: 50%;
  margin-left: -2px;
  margin-top: -4px;
`;

export const StyledRightArrow = styled.div`
  display: block;
  float: left;
  width: 10px;
  height: 10px;
  border-left: 2px solid #006cfa;
  border-bottom: 2px solid #006cfa;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -2px;
  margin-top: -4px;
  transform: rotate(225deg);
  margin-left: -8px;
`;

export const StyledDateContainer = styled.div`
  border: 1px solid rgba(0, 53, 124, 0.25);
  box-sizing: border-box;
  border-top: 0;
  display: flex;
`;

export const StyledDate = styled.div`
  margin: auto;
  font-family: Roboto;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #00357c;
`;

export const StyledPickerWidget = styled.div`
  position: absolute;
  top: 126px;
  width: 392px;
  min-height: 350px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  border: 2px solid #00357c;
  box-shadow: 0 0 32px 0 rgba(0, 53, 124, 0.25);
`;

export const StyledCalendarHeader = styled.div`
  width: 100%;
  height: 47px;
  font-family: Roboto;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: #00357c;
  display: flex;
  border-bottom: 1px solid rgba(0, 53, 124, 0.25);
`;

export const StyledCalendarHeaderDays = styled.div`
  width: 14.285%;
  text-align: center;
  margin: auto;
`;

export const StyledCalendarDayContainer = styled.div`
  position: relative;
  display: block;
  float: left;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  width: 14.285%;
  height: 16.6666%;
  border-bottom: 1px solid rgba(0, 53, 124, 0.25);

  &.disabled .cdc-day span {
    pointer-events: none;
    display: none;
  }

  &.highlight .cdc-day span {
    font-weight: bold;
  }

  &.highlight-green .cdc-day span {
    background: #006cfa;
    font-weight: bold;
    color: white;
  }
`;

export const StyledCalendarDay = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;

  span {
    font-family: Roboto;
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;
    color: #00357c;
    width: 30px;
    height: 30px;
    margin-top: -15px;
    margin-left: -15px;
    left: 50%;
    top: 50%;
    font-weight: 400;
    border-radius: 100%;
    line-height: 30px;
  }
  span:hover {
    cursor: pointer;
    background: #d9e9fe;
    font-weight: bold;
    color: #00357c;
  }
  span {
  }
`;

export const StyledCalendarBody = styled.div`
  height: 270px;
  width: 100%;
`;

export const StyledCalendar = styled.div`
  .cdc-day span,
  .cdc-day,
  .c-day-container {
    position: relative;
    display: block;
    float: left;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;
