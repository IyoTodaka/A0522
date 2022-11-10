import React from 'react'

import "./App.css";

import ReusableComponent from "./components/ReusableComponent";
import ReusableComponentTwo from "./components/ReusableComponentTwo";
import FormClass from './components/FormClass';

function App() {
  const isAuth = true;
  const studentArray = [{ name: "Jumpei" }, { name: "Isaac" }];
  let formValue = "";

  function handleClick(event){
    console.log(event)
  }

  function handleInputChange(e){
    console.log(e.target.value)
  }

  function handleChange(e){
    // console.log(e.target.value);
    formValue = e.target.value
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(formValue)
  }


  return (
    <>
      {/* As props */}
      {studentArray.map((student,index) => (
        <React.Fragment key={index}>
          <ReusableComponent  studentName={student.name} />
          <ReusableComponent  studentName={student.name} />
          {/* Pass a reference to the function of handleClick */}
          {/* <button onClick={handleClick}>Click me</button> */}
          {/* <button onClick={() => handleClick(student.name)}>Click me</button> */}
          {/* <button onClick={(event) => handleClick(event, student.name)}>Click me</button> */}
          {/* Automatically passes the SyntheticBaseEvent */}
          {/* <button onClick={handleClick}>Click me</button> */}

          <input onChange={handleInputChange} />
        </React.Fragment>
      ))}

      {/* As children */}
      {/* {studentArray.map((student) => (
        <ReusableComponentTwo>
          <p>
            <h1>{student.name}</h1>
          </p>
        </ReusableComponentTwo>
      ))} */}
      <br /><br /><br /><br />

      <p>{formValue}</p>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <FormClass />

    </>
  );
}

export default App;
