import React from "react";
import { StudentListContext } from "./Context/StudentContext";

export const StudentForm = () => {

    const studentContext = React.useContext(StudentListContext);

    const languageList = ["Tamil", "English", "Hindi"];
    const [selectedLanguage, setLanguage] = React.useState([]);

    // Add/Remove checked item from list
    const handleCheck = (event) => {
        var updatedList = [...selectedLanguage];
        if (event.target.checked) {
        updatedList = [...selectedLanguage, event.target.value+", "];
        } else {
        updatedList.splice(selectedLanguage.indexOf(event.target.value), 1);
        }
        setLanguage(updatedList);
    };

    const btnSubmitClick = () => {
        studentContext.setStudentList([...studentContext.studentList, studentContext.form]);
        studentContext.setForm({});
    }

    const [gender, setGender] = React.useState('');
    const getRadioButtonValue = (e) => {
        setGender(e.target.value);
    }

    return <div>
        <h1>Student Registration Form</h1>

        <label>Name: </label>
        <input 
            id="name" 
            name="name"
            type="text" 
            maxLength={"100"}
            value={studentContext.form.name}
            onChange={(e) => studentContext.setForm({...studentContext.form, name: e.target.value})}>
        </input>
        <br/>
        <label>Age: </label>
        <input 
            id="age" 
            type="number"
            name="age"
            value={studentContext.form.age}
            onChange={(e) => studentContext.setForm({...studentContext.form, age: e.target.value})} 
            min={1} 
            max={110} 
            maxLength={3}>
        </input>
        <br/>
        <label>DOB: </label>
        <input 
            id="dob" 
            type="date"
            name="date"
            value={studentContext.form.date}
            onChange={(e) => studentContext.setForm({...studentContext.form, date: e.target.value})}>
        </input>
        <br/>
        <label>Languages:</label>
        {languageList.map((item, index) => (
          <div key={index}>
            <input 
                value={item} 
                type="checkbox" 
                onChange={handleCheck}
                >
            </input>
            <label>{item}</label>
          </div>
        ))}
        <br/>
        <label for="city">City: </label>
        <select 
            id="city"
            name="city"
            value={studentContext.form.city}
            onChange={(e) => studentContext.setForm({...studentContext.form, city: e.target.value})}>
            <option value="select">--select--</option>
            <option value="Chennai">Chennai</option>
            <option value="Delhi">Delhi</option>
            <option value="Bangaluru">Bangaluru</option>
            <option value="Mumbai">Mumbai</option>
        </select>
        <br/>
        <label>Gender:</label>
        <div onChange={getRadioButtonValue}>
            <input type="radio" id="rd1" name="gender" value="Male" checked={gender === "Male"}></input>
            <label for="rd1" style={{paddingRight: "5px"}}>Male</label>
            <input type="radio" id="rd2" name="gender" value="Female" checked={gender === "Female"}></input>
            <label for="rd2">Female</label>
        </div>
        <br/>
        <label>Comments:</label>
        <input 
            type="text" 
            id="comment" 
            name="comment"
            value={studentContext.form.comment}
            onChange={(e) => studentContext.setForm({...studentContext.form, comment: e.target.value})}
            style={{width:"300px", height:"200px", textWrap:"wrap"}}>
        </input>
        <br/>
        <button id="submit" onClick={btnSubmitClick}>Submit</button>

        <hr></hr>

        <br/>
        <br/>
        <div className={`App-table`}>
            <table>
                <thead>
                    <th>Sl.no</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>DOB</th>
                    <th>Languages</th>
                    <th>City</th>
                    <th>Gender</th>
                    <th>Comment</th>
                </thead>
                <tbody>
                    {
                        studentContext.studentList.map((student,index) => {
                            return <React.Fragment key={index}>
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.date}</td>
                                    <td>{selectedLanguage}</td>
                                    <td>{student.city}</td>
                                    <td>{gender}</td>
                                    <td>{student.comment}</td>
                                </tr>
                            </React.Fragment>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}