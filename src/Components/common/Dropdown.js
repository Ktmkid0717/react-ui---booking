import React from 'react'
import Select from 'react-select'

const Dropdown = (props) => {
    const {controlGroup,onChangeValue,onFocusOut}=props
  return (
    <div>
        <Select
        styles={{
            menu: provided => ({
              ...provided,
              marginTop: 0,
              position: 'relative',
              top: 0,
            }),
            placeholder: () => ({
              color: '#b1bccd',
              fontSize: '13px',
            }),
            menuList: () => ({
              color: '#415559',
              fontSize: '13px',
              maxHeight: 215,
              overflow: 'auto',
            }),
            option: (provided, state) => ({
              ...provided,
              borderBottom: '1px solid #c1cad8',
              //   backgroundColor: state.isSelected
              //     ? '#00b5e9'
              //     : state.isFocused
              //     ? '#a4d1dc'
              //     : '#fff',
              color: state.isSelected ? '#ffff' : '#415559',
            }),
            control: (provided, state) => {
              return {
                ...provided,
                fontSize: '12px',
                border:
                  controlGroup.invalid && !state.isFocused
                    ? '1px solid red'
                    : '1px solid rgb(177, 188, 205)',
                borderRadius: '2px',
                height: '38px',
                minHeight: '38px',
              }
            },
            container: provided => ({
              ...provided,
              height: '30px',
              minHeight: '30px',
            }),

            dropdownIndicator: base => ({
              ...base,
              padding: '0 8px',
            }),
          }}
    isSearchable={true}
    onChange={(option)=>{
        onChangeValue(option)
    }}
    onBlur={onFocusOut}
    value={controlGroup.value}
        />
    </div>
  )
}

export default Dropdown