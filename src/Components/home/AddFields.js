import { Component } from "react";
import Select from "react-select";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalendarOutlined,
} from "@ant-design/icons";

let dropdownStyle ={
    menu: provided => ({
      ...provided,
      marginTop: 0,
      position: 'relative',
      top: 20,
    }),
    placeholder: () => ({
      color: "hsl(0, 0%, 20%)",
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
      color: state.isSelected ? '#ffff' : '#415559',
    }),
    control: (provided, state) => {
      return {
        ...provided,
        fontSize: '12px',
        borderRadius: '2px',
        // height: '30px',
        minHeight: '30px',
        border:'none !important',
        boxShadow: 'unset !important',
        borderColor:'unset !important',
        display:'flex',
        cursor: 'pointer'
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
  }

class AddFields extends Component {
  handleChange = (ev, labal) => {
    // console.log(ev);
    if (labal && ev) {
    //   console.log(ev);
      this.props.onChange({
        ...this.props.value,
        [labal]: ev
      });
    } else {
      const { name, value } = ev.target;
      this.props.onChange({
        ...this.props.value,
        [name]: value
      });
    }
  };

  render() {
    const { value: user } = this.props;
    return (
      <>
      <div className='applicant-fields'>
      <Select
      styles={dropdownStyle}
          className="dropdown-control"
          options={[
            { value: "mr", label: "Mr" },
            { value: "ms", label: "Ms" }
          ]}
          onChange={(e) => this.handleChange(e, "title")}
          value={user.title}
          isSearchable={false}
        />
      </div>
      <div className={this.props?.isValid&&user.name===""?'applicant-fields-1 error':'applicant-fields-1'}>
      <input
          className="form-control"
          name="name"
          value={user.name}
          onChange={this.handleChange}
          placeholder="Name"
          type="text"
        />
      </div>
      <div className={this.props?.isValid&&user.surname===""?'applicant-fields-2 error':'applicant-fields-2'}>
      <input
          className="form-control"
          name="surname"
          value={user.surname}
          onChange={this.handleChange}
          placeholder="Surname"
          type="text"
        />
      </div>
      <div className={this.props?.isValid&&user.dob===""?'applicant-fields-3 error':'applicant-fields-3'}>
       <ReactDatePicker  className='date-selector' placeholderText="Date Of Birth"
       dateFormat={'dd-MM-yyyy'}
       showMonthDropdown
        showYearDropdown
       style={{
        border:'1px solid #e1e9ec'
       }}
       selected ={user.dob}
       onChange={ (e)=>this.handleChange(e,'dob')}
       />
       <CalendarOutlined/>
      </div>
      <div className={this.props?.isValid&&user.gender?.value==="select"?'applicant-fields-4 error':'applicant-fields-4'}>
      <Select
       styles={dropdownStyle}
          className="dropdown-control"
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" }
          ]}
          onChange={(e) => this.handleChange(e, "gender")}
          value={user.gender}
          isSearchable={false}
        />
      </div>
       {!this.props?.type&&(
        <div className={this.props?.isValid&&user.relationship?.value==="select"?'applicant-fields-5 error':'applicant-fields-5'}>
      <Select
       styles={dropdownStyle}
          className="dropdown-control"
          options={[
            { value: "father", label: "Father" },
            { value: "mother", label: "Mother" },
            { value: "son", label: "Son" },
            { value: "other", label: "Other" },
          ]}
          isSearchable={false}
          onChange={(e) => this.handleChange(e, "relationship")}
          value={user.relationship}
        />
      </div> 
       )} 
      </>
    );
  }
}

export default AddFields;
