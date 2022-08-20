import React from 'react'
import DatePicker from 'react-datepicker'

const DatePickerField = (props) => {
    const {controlGroup,onchangeValue,onFocusOut}=props
  return (
    <div>
        <DatePicker
          selected={controlGroup.value}
          disabled={controlGroup.readonly}
          onBlur={onFocusOut}
          showYearDropdown          =    {true}
          scrollableYearDropdown    =    {true}
          yearDropdownItemNumber    =    {5}                
          onChange ={(value)=>onchangeValue(value)}
          minDate={controlGroup.min_date?new Date(controlGroup.min_date):null}
          maxDate={controlGroup.max_date?new Date(controlGroup.max_date):null}
        />
    </div>
  )
}

export default DatePickerField