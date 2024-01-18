

export function EducationForm(){
        
   
        return(
        <>
         <form>
              <label htmlFor="school"><h4>School</h4></label>
              <input type="text" name='school' />
              <label htmlFor="degree"><h4>Degree</h4></label>
              <input type="text" name='degree' />
              <label htmlFor="startDate"><h4>Start Date</h4></label>
              <input type="date"  name='startDate'/>
              <label htmlFor="endDate"><h4>End Date</h4></label>
              <input type="date" name='endDate' />
              <label htmlFor="location"><h4>Location</h4></label>
              <input type="text" name='location'/>
              <button className='deleteButton'>Delete</button>
            </form>
        </>)}

export function ExperienceForm(){
    return(
            <>
            <form>
            <label htmlFor="companyName"><h4>Company Name</h4></label>
            <input type="text" name='companyName'/>
            <label htmlFor="positionTitle"><h4>Position Title</h4></label>
            <input type="text" name='positionTitle'/>
            <label htmlFor="startDate"><h4>Start Date</h4></label>
            <input type="date" name='startDate'/>
            <label htmlFor="endDate"><h4>End Date</h4></label>
            <input type="date" name='endDate'/>
            <label htmlFor="location"><h4>Location</h4></label>
            <input type="text" name='location'/>
            <label htmlFor="description"><h4>Description</h4></label>
            <input type="text" name='description'/>
            <button className='deleteButton'>Delete</button>
           </form>
           </>)
        }



        


