
import './App.css';
import React, { useState } from "react";
import General from './components/general'
import Education from './components/education'
import Work from './components/work'

function App() {

//Initial state with all objects, keys, empty values and arrays to push / display from
  const [ information, setInfo ] = useState({ general:{ firstlast:'',email:'',phone:'' }, education:{ school:'',major:'' }, work:{ company:'' }, arrayG: [], arrayE: [], arrayW: []})


//Takes any input to sort properly to its designated spot based on name / id 
  const changeInfo = (e) => {
    const id = e.target;
    setInfo({...information,[id.id]:{...information[id.id],[id.name]: id.value }})
  }

//Sorts by form name and id and sends updates info to components
  const onSubmit = (e) => {
    const id = e.target
    e.preventDefault();
    setInfo({
      ...information,
      general:{ firstlast:'',email:'',phone:'' }, 
      education:{ school:'',major:'' },
      work:{ company:'' },
      [id.name]: information[id.name].concat(information[id.id]),
  
    })
  }

  return (
    <div>
      <form id='general' name='arrayG' onSubmit={onSubmit}>
        <input id='general' name='firstlast' onChange={changeInfo} value={information.general.firstlast}></input>
        <input id='general' name='email' onChange={changeInfo} value={information.general.email}></input>
        <input id='general' name='phone' onChange={changeInfo} value={information.general.phone}></input> 
        <button type='submit'>Submit information!</button>
      </form>
      <form id='education' name='arrayE' onSubmit={onSubmit}>
        <input id='education' name='school' onChange={changeInfo} value={information.education.school}></input> 
        <input id='education' name='major' onChange={changeInfo} value={information.education.major}></input> 
        <button type='submit'>Submit information!</button>
      </form>
      <form id='work' name='arrayW' onSubmit={onSubmit}>
      <input id='work' name='company' onChange={changeInfo} value={information.work.company}></input> 
      <button type='submit'>Submit information!</button>
      </form>
      <General array={information.arrayG} />
      <Education array={information.arrayE} />
      <Work array={information.arrayW} />

    </div>
  );
}

export default App;
