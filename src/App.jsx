import './index.css';
import { useState } from 'react';
import { EducationForm } from './Forms';
import { ExperienceForm } from './Forms';








function App() {

const [educationForms, setEducationForms] = useState([]);
const [experienceForms, setExperienceForms] = useState([]);

const handleAddEducation = () =>{
setEducationForms([<EducationForm key={educationForms.length} />])
}
const handleAddExperience = () => {
  setExperienceForms([<ExperienceForm key={experienceForms.length} />]);
};


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
          <div id="personalDetailsContainer">
            <form>
              <label htmlFor="Fullname"><h4>Fullname</h4></label>
              <input type="text" id='Fullname' name='Fullname'/>

              <label htmlFor="Email"><h4>Email</h4></label>
              <input type="email" id="Email" name='Email' />

              <label htmlFor="Phone Number"><h4>Phone Number</h4></label>
              <input type="text" id="Phone Number" name='Phone Number'/>

              <label htmlFor="Address"><h4>Address</h4></label>
              <input type="text" id="Address" name="Address"  ></input>

            </form>
          </div>


          <div id="detailsButtonsMain">
          <div className="detailsButtonsContainers">
            <h4>Education</h4>
           <p>{educationForms}</p>
            <button className="add" id='educationAdd' onClick={ handleAddEducation }>Add</button>
          </div>
          <div className="detailsButtonsContainers">
            <h4>Experience</h4>
          
            <div>{experienceForms}</div>
            
          <button className="add" id='experienceAdd' onClick={ handleAddExperience }>Add</button>
          
          </div>
          </div>
        </div>
     


      <div id="cvContainer" className='container'>
        <div id="cvHeader" className='container'>
         
        <div className="fullNameResult"> <h1>Name Result</h1></div>
        <div id="cvHeaderDetails">
          <div id="emailResult"></div>
          <div id="phoneResult"></div>
          <div id="addressResult"></div>
        </div>
        </div>

    <div id="cvEducationContainer" className='container'>
      <div id="cvEducationHeader" className='container'><h1>Education</h1></div>
      <div id="cvEducationDetailsContainer" className='container'>
        <div id="edDetailsLeft">
          <div id="degreeResult"></div>
          <div id="schoolResult"></div>
          <div id="addressResult"></div>
        </div>

        <div id="edDetailsRight">
          <div id="eduFromResult"></div>
          <div id="eduToResult"></div>
        </div>
      </div>
    </div>


    <div id="cvExperienceContainer" className='container'>
      <div id="cvExperienceHeader" className='container'><h1>Experience</h1></div>
      <div id="cvExperienceDetialsContainer" className='container'>
        <div id="expDetailsLeft">
          <div id="companyResult"></div>
          <div id="jobResult"></div>
          <div id="locationResult"></div>
        </div>

        <div id="expDetailsRight">
          <div id="expFromResult"></div>
          <div id="expToResult"></div>
        </div>
      </div>
  
    </div>
    <div id="cvDescriptionContainer" className='container'><h1>Description</h1></div>
      </div>

      </div>

 
    </>
  )
}

export default App
