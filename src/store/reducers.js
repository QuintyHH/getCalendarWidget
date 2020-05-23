import {
  BUTTON_UPDATE_SUBMIT_HOVER,
  TRACK_EVENT_SUBMIT_CLICK,
  PICKER_UPDATE_WIDGET_OPEN,
  PICKER_UPDATE_DATE,
  PICKER_UPDATE_YEAR,
  PICKER_UPDATE_MONTH,
  PICKER_UPDATE_MONTHDETAILS,
  PICKER_UPDATE_FORMATTED_DATE,
} from "./actions";

const buttonReducer = (state, action) => {
  switch (action.type) {
    case BUTTON_UPDATE_SUBMIT_HOVER:
      return {
        ...state,
        hover: action.hover,
      };
    default:
      return state;
  }
};

const pickerReducer = (state, action) => {
  switch (action.type) {
    case PICKER_UPDATE_WIDGET_OPEN:
      return {
        ...state,
        open: action.open,
      };
    case PICKER_UPDATE_DATE:
      return {
        ...state,
        date: action.date,
      };
    case PICKER_UPDATE_FORMATTED_DATE:
      return {
        ...state,
        formattedDate: action.formattedDate,
      };
    case PICKER_UPDATE_YEAR:
      return {
        ...state,
        year: action.year,
      };
    case PICKER_UPDATE_MONTH:
      return {
        ...state,
        month: action.month,
      };
    case PICKER_UPDATE_MONTHDETAILS:
      return {
        ...state,
        monthDetails: action.monthDetails,
      };
    default:
      return state;
  }
};

const eventReducer = (state, action) => {
  //custom trackers to populate the event array that eventually can be picked up somewhere else.... GBQ maybe?
  //just thought this might be something cool to have
  switch (action.type) {
    case TRACK_EVENT_SUBMIT_CLICK:
      return [...state, action.click];
    default:
      return state;
  }
};

export const mainReducer = ({ eventTrack, button, picker }, action) => ({
  button: buttonReducer(button, action),
  eventTrack: eventReducer(eventTrack, action),
  picker: pickerReducer(picker, action),
});
