import uniqid from 'uniqid';
import './App.css';
import React, { useState } from "react";
import General from './components/general';
import Education from './components/education';
import Work from './components/work';

function App() {
//Initial state with all objects, keys, empty values and arrays to push / display from
  const general = { identify: uniqid(),firstlast:'',email:'',phone:'' };
  const education = { identify: uniqid(),school:'',major:'' };
  const work = { identify: uniqid(),company:'' };

  const [ information, setInfo ] = useState({ general, education, work, arrayG: [], arrayE: [], arrayW: []})


//Takes any input to sort properly to its designated spot based on name / id 
  const changeInfo = (e) => {
    const id = e.target;
    setInfo({...information,[id.id]:{...information[id.id],[id.name]: id.value, identify:information[id.id].identify}})
  }

//Sorts by form name and id and sends updates info to components
  const onSubmit = (e) => {
    const id = e.target
    e.preventDefault();
    setInfo({
      ...information,
      [id.name]: information[id.name].concat(information[id.id]),
      
    })
  }

  const test = (e) => {
    console.log(information.arrayG)
    const indexOfObject = information.arrayG.findIndex(object => {
      return object.id === e.target.key
    })
    setInfo({...information, arrayG:information.arrayG.splice(indexOfObject, 1)})
    console.log(information.arrayG)
  }

  
  const display = {information, test}

  return (
    <div className ='container'>
      <div className = 'form'>
        <form id='general' name='arrayG' onSubmit={onSubmit}>
          <input placeholder='First and Last name' id='general' name='firstlast' onChange={changeInfo} value={information.general.firstlast}/><br/>
          <input placeholder='Email@email.com' id='general' name='email' onChange={changeInfo} value={information.general.email}/><br/>
          <input placeholder='Phone #' id='general' name='phone' onChange={changeInfo} value={information.general.phone}/><br/>
          <button type='submit'>Submit information</button>
        </form>
        <form id='education' name='arrayE' onSubmit={onSubmit}>
          <input placeholder='School' id='education' name='school' onChange={changeInfo} value={information.education.school}/><br/>
          <input placeholder='Major' id='education' name='major' onChange={changeInfo} value={information.education.major}/><br/>
          <button type='submit'>Submit information</button>
        </form>
        <form id='work' name='arrayW' onSubmit={onSubmit}>
        <input placeholder='Company Name' id='work' name='company' onChange={changeInfo} value={information.work.company}/><br/>
        <button type='submit'>Submit information</button>
        </form>
      </div>
      <div className = 'resume'>
        <General array={display} />
        <Education array={information.arrayE} />
        <Work array={information.arrayW} />
      </div>
    </div>
  );
}

export default App;
