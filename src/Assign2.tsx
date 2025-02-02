const Assign2 = ()=>{

    return(
        <>
            <form >
                <h3>Draw a webpage containing the following elements for a consultancy:</h3>
                <label > Name:- <input type="text" placeholder="Enter your Name" /> </label><br /><br />
                <label > Email:- <input type="email" placeholder="Enter your Email" /> </label><br /><br />
                <label > Phone Number :- <input type="text" placeholder="Enter your Number" /> </label><br /><br />
                <label > Upload Resume:- 
                    <input type="file"/> 
                </label><br /><br />
                <label>Gender:- 
                    <input type="radio" name="married" />Married
                    <input type="radio" name="married" />Unmarried
                    <input type="radio" name="married" />Divorced
                </label> <br /><br />
                <label>Country:-</label>
                <select >
                    <option value="Nepal" selected >Nepal</option>
                    <option value="#" >India</option>
                    <option value="#"  >Russia</option>
                    <option value="#"  >China</option>
                    <option value="#"  >USA</option>
                    <option value="#" disabled >Switzerland</option>
                    <option value="#"  >Uk</option>
                </select> <br /> <br />
                <label>Faculty:- </label>
                <select>
                    <option label="BCA">
                        <option>English</option>
                        <option>Nepali</option>
                        <option>Maths</option>
                        <option>Cprogramming</option>
                        <option>Digital Logic</option>
                    </option>
                    <option label="BIM" >
                        <option>English</option>
                        <option>DL</option>
                        <option>Microprocessor</option>
                        <option>C++</option>
                        <option>WEB tec</option>
                    </option>
                    <option label="CSIT" >
                        <option>Numberical Method</option>
                        <option>DSA</option>
                        <option>Microprocessor</option>
                        <option>DL</option>
                        <option>DAA</option>
                    </option>
                </select> <br /><br />
                <label>Message:- 
                    <textarea ></textarea>
                </label> <br /><br />
                <input type="checkbox" checked />I have read and agree with all terms and conditions of the organization"
                <br /><br />
                <button type="submit" >Submit</button>
            </form>
        </>
    )
}
export default Assign2
