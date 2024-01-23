import './index.css';
import { useState } from 'react';
import { Education } from './components/Forms';
import { Experience } from './components/Forms';




function App() {


const [eduForm, setEduForm] = useState([])
const [expForm, setExpForm] = useState([])

const [result, setResult] = useState('');

function resultHandler(e){
  setResult(e.target.value);
}

function eduClick(){
  setEduForm(<Education resultValue={resultHandler}/>)
}

function expClick(){
  setExpForm(<Experience resultValue={resultHandler} />)
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
          <div id="degreeResult"><h4>{result}</h4></div>
          <div id="schoolResult" ><h4>{result}</h4></div>
          <div id="addressResult"><h4>{result}</h4></div>
        </div>

        <div id="edDetailsRight">
          <div id="eduFromResult"><h4>{result}</h4></div>
          <div id="eduToResult"><h4>{result}</h4></div>
        </div>
      </div>
    </div>


    <div id="cvExperienceContainer" className='container'>
      <div id="cvExperienceHeader" className='container'><h1>Experience</h1></div>
      <div id="cvExperienceDetialsContainer" className='container'>
        <div id="expDetailsLeft">
          <div id="companyResult"><h4>{result}</h4></div>
          <div id="jobResult"><h4>{result}</h4></div>
          <div id="locationResult"><h4>{result}</h4></div>
        </div>

        <div id="expDetailsRight">
          <div id="expFromResult"><h4>{result}</h4></div>
          <div id="expToResult"><h4>{result}</h4></div>
        </div>
      </div>
  
    </div>
    <div id="cvDescriptionContainer" className='container'><h1>Description</h1></div>
    <h4>{result}</h4>
      </div>

      </div>

 
    </>
  )
}

export default App
