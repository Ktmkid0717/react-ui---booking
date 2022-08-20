import React from 'react'
import './index.css'
import AddFields from './AddFields';
import { Button } from "antd";
import "antd/dist/antd.css";
import {

  DeleteFilled,
  FileOutlined
} from "@ant-design/icons";

class TravelPortal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applicantList:[
        {
          key: Date.now(),
          title:{ value: "mr", label: "Mr" },
          name: "",
          surname: "",
          dob: "",
          gender: { value: "select", label: "Gender" },
        }
      ],
      coApplicantList: [
        {
          key: Date.now(),
          title:{ value: "mr", label: "Mr" },
          name: "",
          surname: "",
          dob: "",
          gender: { value: "select", label: "Gender" },
          relationship: { value: "select", label: "Relationship" }
         
        }
      ],
      isValid:false
    };
  }
   
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    // const onSubmit = data => console.log(data);
    onChange = (inputUser) => {
      this.setState((prevState) => {
        const newUsers = prevState.coApplicantList.map((element) => {
          if (element.key === inputUser.key) return inputUser;
          return element;
        });
        return { coApplicantList: newUsers };
      });
    };
    onApplicantChange = (inputUser) => {
      this.setState((prevState) => {
        const newUsers = prevState.applicantList.map((element) => {
          if (element.key === inputUser.key) return inputUser;
          return element;
        });
        return { applicantList: newUsers };
      });
    };
  
    addElement = () => {
      const { coApplicantList,name,title,surname,dob,gender,relationship, } = this.state;
      if(coApplicantList&&coApplicantList.length<9){
        this.setState((prevState) => ({
          coApplicantList: prevState.coApplicantList.concat({
            key: Date.now(),
            title:{ value: "mr", label: "Mr" },
            name: "",
            surname: "",
            dob: "",
            gender: { value: "select", label: "Gender" },
            relationship: { value: "select", label: "Relationship" }
          })
        }));
      }
    };
    removeElement = (id) => {
      this.setState((prevState) => ({
        coApplicantList: prevState.coApplicantList.filter((user) => user.key !== id)
      }));
    };
    onSubmit=()=>{
      this.setState({isValid:true})
        console.log('ApplicantList',this.state.applicantList);
      console.log('Co-ApplicantList',this.state.coApplicantList);
    }
    isValidate=(tmpdata)=>{
      if(tmpdata && tmpdata?.name!==''){

      }
    }
    render(){
      const { applicantList,coApplicantList,isValid } = this.state;
  return (
    <div className='main-container'>
    <div className='header-wrapper'>
        <div className='header-btn'>Create Traveller</div>
        <div className='header-btn'>Edit/Update Traveller</div>
    </div>
    <div className='content-wrapper'>
        <div className='content-wrapper-head'>
            <div className='header-types'>Visa Type</div>
            <div className='header-types'>Depart</div>
            <div className='header-types'>Return</div>
            <div className='header-types'>Travellers</div>
        </div>
        <div className='content-wrapper-body'>
            <div className='body-head'>
                <div>
                <Button className='list-doc-btn' >Traveller Names</Button></div>
                <div>
                  <Button className='list-doc-btn' icon={<FileOutlined />}>List of Documents</Button></div>
            </div>
            <div>1. Main Applicant</div>
            <div className='body-discription'>Traveller 1 should be an adult who is also the primary for this trip. All the communications will be sent in the name of the primary Traveller</div>
            {applicantList.map((user) => (
               <div className='applicant-section' key={user.key}>    
            <AddFields
                value={user}
                onChange={(inputUser) => this.onApplicantChange(inputUser)}
                type="applicant"
                isValid={isValid}
              />
              </div>
           
          ))}
            <div>Co-Applicant 1</div>
            {coApplicantList.map((user) => (
               <div className='Co-applicant-section' key={user.key}>    
            <AddFields
                value={user}
                onChange={(inputUser) => this.onChange(inputUser)}
                isValid={isValid}
              />
              <Button
                type="button"
                className='btn-remove'
                onClick={() => this.removeElement(user.key)}
                disabled={coApplicantList.length <= 1}
                icon={<DeleteFilled />}
              >
                {/* Remove */}
              </Button>
         
              </div>
           
          ))}
            {coApplicantList && coApplicantList.length < 9 && (
              <Button type="button"  onClick={this.addElement}>
             + Add Co-Applicant
        </Button>
            )}
             
            {/* <div>+ Add Co-Applicant</div> */}
            <div className='footer-wrapper'>
        <div className='save-btn' type="submit" onClick={this.onSubmit}>save</div>
    </div>
        </div>
      
    </div>
   
    </div>
   
  )
 }
}

export default TravelPortal