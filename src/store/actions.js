export const BUTTON_UPDATE_SUBMIT_HOVER = "USER_UPDATE_SUBMIT_HOVER";
export const TRACK_EVENT_SUBMIT_CLICK = "TRACK_EVENT_SUBMIT_CLICK";
export const PICKER_UPDATE_WIDGET_OPEN = "PICKER_UPDATE_WIDGET_OPEN";
export const PICKER_UPDATE_DATE = "PICKER_UPDATE_DATE";
export const PICKER_UPDATE_FORMATTED_DATE = "PICKER_UPDATE_FORMATTED_DATE";
export const PICKER_UPDATE_YEAR = "PICKER_UPDATE_YEAR";
export const PICKER_UPDATE_MONTH = "PICKER_UPDATE_MONTH";
export const PICKER_UPDATE_MONTHDETAILS = "PICKER_UPDATE_MONTHDETAILS";

export const buttonUpdateHoverAction = (hover) => ({
  type: BUTTON_UPDATE_SUBMIT_HOVER,
  hover,
});
export const trackEventSubmitAction = (click) => ({
  type: TRACK_EVENT_SUBMIT_CLICK,
  click,
});
export const pickerWidgetOpenAction = (open) => ({
  type: PICKER_UPDATE_WIDGET_OPEN,
  open,
});
export const pickerUpdateDateAction = (date) => ({
  type: PICKER_UPDATE_DATE,
  date,
});
export const pickerUpdateFormattedDateAction = (formattedDate) => ({
  type: PICKER_UPDATE_FORMATTED_DATE,
  formattedDate,
});
export const pickerUpdateYearAction = (year) => ({
  type: PICKER_UPDATE_YEAR,
  year,
});
export const pickerUpdateMonthAction = (month) => ({
  type: PICKER_UPDATE_MONTH,
  month,
});
export const pickerUpdateMonthDetailsAction = (monthDetails) => ({
  type: PICKER_UPDATE_MONTHDETAILS,
  monthDetails,
});
