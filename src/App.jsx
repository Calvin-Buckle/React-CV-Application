import './styles.css';
import { useState } from 'react';
import { Education } from './components/Forms';
import { Experience } from './components/Forms';




function App() {


const [eduForm, setEduForm] = useState([])
const [expForm, setExpForm] = useState([])


const [schoolResult, setSchoolResult] = useState('')
const [degreeResult, setDegreeResult] = useState('')
const [descriptionResult, setDescriptionResult] = useState('')
const [startDateResult, setStartDateResult] = useState('')
const [endDateResult, setEndDateResult] = useState('')
const [locationResult, setLocationResult] = useState('')
const [companyNameResult, setCompanyNameResult] = useState('')
const [positionTitleResult, setPositionTitleResult] = useState('')
const [expStartDateResult, setExpStartDateResult] = useState('')
const [expEndDateResult, setExpEndDateResult] = useState('')
const [expLocationResult, setExpLocationResult] = useState('')
const [fullNameResult, setFullNameResult] = useState('')
const [emailResult, setEmailResult] = useState('')
const [phoneResult, setPhoneResult] = useState('')
const [addressResult, setAddressResult] = useState('')

function resultHandler(e){
const name = e.target.name;
if(name === 'school'){
setSchoolResult(e.target.value)
}
if(name === 'degree'){
  setDegreeResult(e.target.value)
}

if(name === 'startDate'){
setStartDateResult(e.target.value)
}
if(name === 'endDate'){
setEndDateResult(e.target.value)
}
if(name === 'location'){
setLocationResult(e.target.value)
}
if(name === 'companyName'){
setCompanyNameResult(e.target.value)
}
if(name === 'positionTitle'){
setPositionTitleResult(e.target.value)
}
if(name === 'eduStartDate'){
setExpStartDateResult(e.target.value)
}
if(name === 'eduEndDate'){
setExpEndDateResult(e.target.value)
}
if(name === 'eduLocation'){
setExpLocationResult(e.target.value)
}
if(name === 'description'){
setDescriptionResult(e.target.value)
}
if(name === 'Fullname'){
setFullNameResult(e.target.value)
}
if(name === 'Email'){
setEmailResult(e.target.value)
}
if(name === 'PhoneNumber'){
setPhoneResult(e.target.value)
}
if(name === 'Address'){
setAddressResult(e.target.value)
}

}


function eduClick() {
  const eduKey = generateUniqueKey();
  setEduForm((prevForms) => [...prevForms, <Education key={eduKey} resultValue={resultHandler} />]);
}

function expClick() {
  const expKey = generateUniqueKey();
  setExpForm((prevForms) => [...prevForms, <Experience key={expKey} resultValue={resultHandler} />]);
}

function generateUniqueKey() {
  return Math.random().toString(36).substring(7);
}



const [formVisible, setFormVisible] = useState(true)

const toggleFormVisibility = () => {
  setFormVisible(!formVisible)
}



  return (
    <>
    <div id="main">
      <div id="controlPanelContainer">
        
          <button id="content">Content</button>
          <button id="customize">Customize</button>
          <button id="clear">Clear</button>
        
        </div>

        <div id="detailsContainer">
          <h2>Personal Details</h2>
          <div id="personalDetailsContainer" style={{display: formVisible ? 'block' : 'none' }} >
            <form>
              <label htmlFor="Fullname"><h4>Fullname</h4></label>
              <input type="text" id='Fullname'  name='Fullname' onChange={resultHandler}/>

              <label htmlFor="Email"><h4>Email</h4></label>
              <input type="email" id="Email" name='Email' onChange={resultHandler} />

              <label htmlFor="PhoneNumber"><h4>Phone Number</h4></label>
              <input type="text" id="PhoneNumber" name='PhoneNumber' onChange={resultHandler}/>

              <label htmlFor="Address"><h4>Address</h4></label>
              <input type="text" id="Address" name="Address" onChange={resultHandler} ></input>

            </form>
            
          </div>
          <button className='open' onClick={toggleFormVisibility} >Open</button>


          <div id="detailsButtonsMain">
          <div className="detailsButtonsContainers">
            <h4>Education</h4>
            <div>{[eduForm]}</div>
            <button className="add" id='educationAdd' onClick={eduClick}>Add</button>
          </div>
          <div className="detailsButtonsContainers">
            <h4>Experience</h4>
          
            <div>{[expForm]}</div>
            
          <button className="add" id='experienceAdd' onClick={expClick}
          >Add</button>
          
          </div>
          </div>
        </div>
     


      <div id="cvContainer" className='container'>
        <div id="cvHeader" className='container'>
         
        <div className="fullNameResult"> <h1>{fullNameResult}</h1></div>

        <div id="cvHeaderDetails">
          <div id="emailResult"><h2>{emailResult}</h2></div>
          <div id="phoneResult"><h2>{phoneResult}</h2></div>
          <div id="addressResult"><h2>{addressResult}</h2></div>
        </div>
        </div>

    <div id="cvEducationContainer" className='container'>
      <div id="cvEducationHeader" className='container'><h1>Education</h1></div>
      <div id="cvEducationDetailsContainer" className='container'>
        <div id="edDetailsLeft">
          <div id="degreeResult"><h4>{degreeResult}</h4></div>
          <div id="schoolResult" name='school' ><h4>{schoolResult}</h4></div>
          <div id="addressResult"><h4>{locationResult}</h4></div>
        </div>

        <div id="edDetailsRight">
          <div id="eduFromResult"><h4>{startDateResult}</h4></div>
          <div id="eduToResult"><h4>{endDateResult}</h4></div>
        </div>
      </div>
    </div>


    <div id="cvExperienceContainer" className='container'>
      <div id="cvExperienceHeader" className='container'><h1>Experience</h1></div>
      <div id="cvExperienceDetialsContainer" className='container'>
        <div id="expDetailsLeft">
          <div id="companyResult"><h4>{companyNameResult}</h4></div>
          <div id="jobResult"><h4>{positionTitleResult}</h4></div>
          <div id="locationResult"><h4>{expLocationResult}</h4></div>
        </div>

        <div id="expDetailsRight">
          <div id="expFromResult"><h4>{expStartDateResult}</h4></div>
          <div id="expToResult"><h4>{expEndDateResult}</h4></div>
        </div>
      </div>
  
    </div>
    <div id="cvDescriptionContainer" className='container'><h1>Description</h1></div>
    <h4>{descriptionResult}</h4>
      </div>

      </div>

 
    </>
  )
}

export default App
