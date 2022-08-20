import React from 'react'

const Texfiled = (props) => {
    const{controlGroup,onFocusOut,onChangeValue,placeholder}=props;
  return (
    <div>
        <input
        type='text'
        value={controlGroup.value?controlGroup.value:''}
        onBlur={onFocusOut}
        onChange={(event)=>onChangeValue(event.target.value)}
        placeholder={placeholder}
        className="form-control"
        disabled={controlGroup.disabled}
        />
    </div>
  )
}

export default Texfiled