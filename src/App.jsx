import './index.css';


function App() {


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
              <label htmlFor="FullName"><h4>FullName</h4></label>
              <input type="text" id='FullName' name='Fullname'/>

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
            <button className="add">Add</button>
          </div>
          <div className="detailsButtonsContainers">
            <h4>Experience</h4>
          <button className="add">Add</button>
          </div>
          </div>
        </div>
     


      <div id="cvContainer">
        <div id="cvHeader">
        <div className="fullNameResult"></div>
        <div id="cvHeaderDetails">
          <div id="emailResult"></div>
          <div id="phoneResult"></div>
          <div id="addressResult"></div>
        </div>
        </div>

    <div id="cvEducationContainer">
      <div id="cvEducationHeader"><h1>Education</h1></div>
      <div id="cvEducationDetailsContainer">
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


    <div id="cvExperienceContainer">
      <div id="cvExperienceHeader"><h1>Experience</h1></div>
      <div id="cvExperienceDetialsContainer">
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
      <div id="cvDescriptionContainer"></div>
    </div>

      </div>

      </div>

 
    </>
  )
}

export default App
