const Assign1 = ()=>{
    return (
        <>
             <h1>Design a form with the following components:</h1>
      <form >
        <h3>Use field set to set the area for form with appropriate legends</h3>
        <label >Name:- <input type="text" /></label><br /><br />
        <label >DOB:- <input type="date" /></label><br /><br />
        <label >Address:- <input type="text" /></label><br /><br />
        <label >Email:- <input type="email" /></label><br /><br />
        <label >Phone Number:- <input type="text" /></label><br /><br />
        <label >Gender:- 
          <input type="radio" />Male
          <input type="radio" />Female
          <input type="radio" />Other
        </label><br /><br />
        <label >Interested Subject:- 
          <input type="checkbox" checked/> C
          <input type="checkbox" /> C++
          <input type="checkbox" /> Python
          <input type="checkbox" /> Java
          <input type="checkbox" /> Net
        </label><br /><br />        
        <label > Feedback section:- <textarea className="w-64 p-2 border border-gray-400 rounded mb-4" placeholder='Enter message' /></label> <br /> <br />

        <button className ="px-6 py-2 bg-blue-500 text-white rounded-md" type='reset'>Reset</button>
        <button className ="px-6 py-2 bg-blue-500 text-white rounded-md" type='submit'>Submit</button>

      </form>
        </>
    )
}
export default Assign1