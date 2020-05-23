import React, { createRef, useEffect, useContext } from "react";
import {
  StyledPickerWrapper,
  StyledPicker,
  StyledPickerAddon,
  StyledPickerWidget,
  StyledPickerWidgetHeader,
  StyledPickerButton,
  StyledCalendarContainer,
  StyledRightArrow,
  StyledLeftArrow,
  StyledDate,
  StyledDateContainer,
  StyledCalendar,
  StyledCalendarHeader,
  StyledCalendarHeaderDays,
  StyledCalendarBody,
  StyledCalendarDayContainer,
  StyledCalendarDay,
  Image,
} from "./datepicker.styles";
import {
  pickerWidgetOpenAction,
  pickerUpdateDateAction,
  pickerUpdateYearAction,
  pickerUpdateMonthAction,
  pickerUpdateMonthDetailsAction,
  pickerUpdateFormattedDateAction,
} from "../../store/actions";
import { MainContext } from "../../store";

export const Datepicker = ({ onChange, value }) => {
  let inputRef = createRef();
  const { state, dispatch } = useContext(MainContext);
  const daysMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const daysShortMap = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  const monthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let oneDay = 60 * 60 * 24 * 1000;
  let todayTimestamp =
    Date.now() -
    (Date.now() % oneDay) +
    new Date().getTimezoneOffset() * 1000 * 60;

  useEffect(() => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    updateState(pickerUpdateYearAction, year);
    updateState(pickerUpdateMonthAction, month);
    updateState(pickerUpdateMonthDetailsAction, getMonthDetails(year, month));
  }, []);

  const getDayDetails = (args) => {
    let date = args.index - args.firstDay;
    let day = args.index % 7;
    let prevMonth = args.month - 1;
    let prevYear = args.year;
    if (prevMonth < 0) {
      prevMonth = 11;
      prevYear--;
    }
    let prevMonthNumberOfDays = getNumberOfDays(prevYear, prevMonth);
    let _date =
      (date < 0 ? prevMonthNumberOfDays + date : date % args.numberOfDays) + 1;
    let month = date < 0 ? -1 : date >= args.numberOfDays ? 1 : 0;
    let timestamp = new Date(args.year, args.month, _date).getTime();
    return {
      date: _date,
      day,
      month,
      timestamp,
      dayString: daysMap[day],
    };
  };

  const getNumberOfDays = (year, month) =>
    40 - new Date(year, month, 40).getDate();

  const getMonthDetails = (year, month) => {
    let firstDay = new Date(year, month).getDay();
    let numberOfDays = getNumberOfDays(year, month);
    let monthArray = [];
    let rows = 6;
    let currentDay = null;
    let index = 0;
    let cols = 7;

    //quadratic, ewww, refactor later?
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        currentDay = getDayDetails({
          index,
          numberOfDays,
          firstDay,
          year,
          month,
        });
        monthArray.push(currentDay);
        index++;
      }
    }
    return monthArray;
  };

  const isCurrentDay = (day) => day.timestamp === todayTimestamp;

  const isSelectedDay = (day) => day.timestamp === state.picker.date;

  const getDateFromDateString = (dateValue) => {
    let dateData = dateValue.split("-").map((d) => parseInt(d, 10));
    if (dateData.length < 3) return null;

    let year = dateData[0];
    let month = dateData[1];
    let date = dateData[2];
    return { year, month, date };
  };

  const getMonthStr = (month) =>
    monthMap[Math.max(Math.min(11, month), 0)] || "Month";

  const getDateStringFromTimestamp = (timestamp) => {
    let dateObject = new Date(timestamp);
    let month = dateObject.getMonth() + 1;
    let date = dateObject.getDate();
    return (
      dateObject.getFullYear() +
      "-" +
      (month < 10 ? "0" + month : month) +
      "-" +
      (date < 10 ? "0" + date : date)
    );
  };

  const setDate = (dateData) => {
    let selectedDay = new Date(
      dateData.year,
      dateData.month - 1,
      dateData.date
    ).getTime();
    updateState(pickerUpdateDateAction, selectedDay);
  };

  const updateDateFromInput = () => {
    let dateValue = inputRef.current.value;
    let dateData = getDateFromDateString(dateValue);
    if (dateData !== null) {
      setDate(dateData);
      updateState(pickerUpdateYearAction, dateData.year);
      updateState(pickerUpdateMonthAction, dateData.month - 1);
      updateState(
        pickerUpdateMonthDetailsAction,
        getMonthDetails(dateData.year, dateData.month - 1)
      );
    }
  };

  const setDateToInput = (timestamp) => {
    let dateString = getDateStringFromTimestamp(timestamp);
    inputRef.current.value = dateString;
  };

  const onDateClick = (day) => {
    updateState(pickerUpdateDateAction, day.timestamp);
    setDateToInput(day.timestamp);
    updateState(pickerUpdateFormattedDateAction, formatDate(day.timestamp));
  };

  const setMonth = (offset) => {
    let year = state.picker.year;
    let month = state.picker.month + offset;
    if (month === -1) {
      month = 11;
      year--;
    } else if (month === 12) {
      month = 0;
      year++;
    }
    updateState(pickerUpdateYearAction, year);
    updateState(pickerUpdateMonthAction, month);
    updateState(pickerUpdateMonthDetailsAction, getMonthDetails(year, month));
  };

  const updateState = (action, value) => {
    dispatch(action(value));
  };

  const formatDate = (date) => {
    let d = new Date(date);
    let y = d.setDate(d.getDate());
    let month =
      new Date(y).getMonth().toLocaleString().length < 2
        ? "0" + (new Date(y).getMonth() + 1).toString()
        : (new Date(y).getMonth() + 1).toString();
    let day =
      new Date(y).getDate().toLocaleString().length < 2
        ? "0" + new Date(y).getDate().toString()
        : new Date(y).getDate().toString();
    let year = new Date(y).getFullYear();
    return `${day}/${month}/${year}`;
  };

  const calendar = () => {
    let days = state.picker.monthDetails.map((day, index) => {
      return (
        <StyledCalendarDayContainer
          className={
            "c-day-container " +
            (day.month !== 0 ? " disabled" : "") +
            (isCurrentDay(day) ? " highlight" : "") +
            (isSelectedDay(day) ? " highlight-green" : "")
          }
          key={index}
        >
          <StyledCalendarDay className="cdc-day">
            <span onClick={() => onDateClick(day)}>{day.date}</span>
          </StyledCalendarDay>
        </StyledCalendarDayContainer>
      );
    });

    return (
      <StyledCalendarContainer>
        <StyledCalendarHeader>
          {daysShortMap.map((d, i) => (
            <StyledCalendarHeaderDays key={i}>{d}</StyledCalendarHeaderDays>
          ))}
        </StyledCalendarHeader>
        <StyledCalendarBody>{days}</StyledCalendarBody>
      </StyledCalendarContainer>
    );
  };

  return (
    <StyledPickerWrapper data-test-id="date-picker">
      <StyledPicker
        data-test-id="date-picker-input"
        type="text"
        readOnly={true}
        ref={inputRef}
        value={
          state.picker.formattedDate
            ? state.picker.formattedDate
            : "Please select"
        }
        onChange={updateDateFromInput}
        onClick={() => updateState(pickerWidgetOpenAction, !state.picker.open)}
      />
      <StyledPickerAddon
        onClick={() => updateState(pickerWidgetOpenAction, !state.picker.open)}
      >
        <Image src="./assets/Up-down.svg" />
      </StyledPickerAddon>
      {state.picker.open ? (
        <StyledPickerWidget data-test-id="date-widget">
          <StyledPickerWidgetHeader>
            <StyledPickerButton onClick={() => setMonth(-1)}>
              <StyledLeftArrow />
            </StyledPickerButton>
            <StyledDateContainer>
              <StyledDate>
                {getMonthStr(state.picker.month)} {state.picker.year}
              </StyledDate>
            </StyledDateContainer>
            <StyledPickerButton onClick={() => setMonth(1)}>
              <StyledRightArrow />
            </StyledPickerButton>
          </StyledPickerWidgetHeader>
          <StyledCalendar>{calendar()}</StyledCalendar>
        </StyledPickerWidget>
      ) : (
        ""
      )}
    </StyledPickerWrapper>
  );
};
