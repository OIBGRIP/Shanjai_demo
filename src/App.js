import React from "react";
import { StudentDetails } from "./components/StudentDetails";


export function App() {

      const [name, setName] = React.useState("");
      const [comment, setComment] = React.useState(" ");
      const [city, setCity] = React.useState ("");
      const [gender, setGender] = React.useState("");
      const [language, setLanguage] = React.useState([]);

      const [submitedata, setSubmitedata] = React.useState({});

      const handleSubmit =(e) => {
          e.preventDefault();
          setSubmitedata({name, comment, city, gender, language})
      }

      const handleReset = () => {
        setName(" ");
        setComment (" ");
        setCity (" ");
        setGender (" ");
        setLanguage([])
      }
    
  return (
      <div>
       
        <h1>Student Registratiion Form :</h1>
        <form on onSubmit={handleSubmit}>
          <label>Student Name:
            <input
            value={name}
            onChange={(e) => setName(e.target.value)} 
            type="text" placeholder=" Enter Student name" />
          </label>
          
            <br></br>
            <br></br>
           <div>
          <label>Comments :
            <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Enter Commments" 
            />
          </label>
          </div>

          <br></br>

          <div>
            <label>City :
              <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value={"Chennnai"}>Chennai</option>
                <option value={"Hosur"}>Hosur</option>
                <option value={"Banglore"}>Banglore</option>
              </select>
            </label>
          </div>

          <br></br>

          <div>
            <label>Gender :
            <input 
            type="radio" 
            value={"Male"} 
            checked ={gender === "Male"}
            onChange = {(e) => {
              if(e.target.checked) {
                setGender("Male");
              } else {
                setGender(" ");
              }
            }}
            name = "gender" />Male
            


            <input 
            type="radio" 
            value={"Female"}
            checked ={gender === "Female"}
            onChange = {(e) => {
              if(e.target.checked) {
                setGender("Female");
              } else {
                setGender(" ");
              }
            }} 
            name = "gender" />Female
            </label>
          </div>
          <br></br>
          <br></br>

          <div>
            <label>Language :
              <input type="checkbox"
              value={"Tamil"}
              checked = {language.includes("Tamil")}
              onChange={(e) => {
                if(e.target.checked){
                  setLanguage([...language, "Tamil"])
                }else {
                  let indexOfTamil = language.indexOf("Tamil");
                  language.splice(indexOfTamil, 1)
                  setLanguage([...language])
                }
              }} />Tamil

              <input type="checkbox"
              value={"English"}
              checked ={language.includes("English")}
              onChange={(e) => {
                if(e.target.checked){
                  setLanguage([...language, "English"])
                } else {
                  let indexOfEnglish = language.indexOf("English")
                  language.splice(indexOfEnglish, 1)
                  setLanguage([...language])
                }
              }} />English

              <input type = "checkbox"
              value={"Hindi"}
              checked ={language.includes("Hindi")}
              onChange={(e) => {
                if(e.target.checked) {
                  setLanguage([...language, "Hindi"])
                }else {
                  let indexOfComputer = language.indexOf("Hindi")
                  language.splice(indexOfComputer, 1)
                  setLanguage([...language])
                }
              }} />Hindi

             
            </label>
          </div>
          <input type="Submit" />

          <button on onClick={handleReset}>Reset</button>
        </form>
       
       <StudentDetails name= {submitedata.name} comment = {submitedata.comment} city = {submitedata.city} gender = {submitedata.gender} language = {submitedata.language} />
        </div>
     
  );
}


