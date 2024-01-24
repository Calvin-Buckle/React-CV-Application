export const Education = ({resultValue}) => {


        return(
        
        <>
         <form>
              <label htmlFor="school" ><h4>School</h4></label>
              <input type="text" onChange={resultValue} name='school' id="school" />
              <label htmlFor="degree"><h4>Degree</h4></label>
              <input type="text" onChange={resultValue} name='degree' id="degree"  />
              <label htmlFor="startDate" ><h4>Start Date</h4></label>
              <input type="date" onChange={resultValue} name='startDate' id="startDate"/>
              <label htmlFor="endDate" ><h4>End Date</h4></label>
              <input type="date" onChange={resultValue} name='endDate' id="endDate" />
              <label htmlFor="location" ><h4>Location</h4></label>
              <input type="text" onChange={resultValue} name='location' id="location" />
              <button className='deleteButton' >Delete</button>
            </form>
        </>)}



export const Experience = ({resultValue}) => {

    return(
            <>
            <form>
            <label htmlFor="companyName"  ><h4>Company Name</h4></label>
            <input type="text" onChange={resultValue} name='companyName' id="compayName"/>
            <label htmlFor="positionTitle" ><h4>Position Title</h4></label>
            <input type="text" onChange={resultValue} name='positionTitle' id="positionTitle" />
            <label htmlFor="startDate" ><h4>Start Date</h4></label>
            <input type="date" onChange={resultValue} name='expStartDate' id="startDate" />
            <label htmlFor="endDate" ><h4>End Date</h4></label>
            <input type="date" onChange={resultValue} name='expEndDate' id="endDate" />
            <label htmlFor="location" ><h4>Location</h4></label>
            <input type="text" onChange={resultValue} name='expLocation' id="location" />
            <label htmlFor="description"><h4>Description</h4></label>
            <input type="text" onChange={resultValue} name='description' id="description" />
            <button className='deleteButton'>Delete</button>
           </form>
           </>
           )
        }


