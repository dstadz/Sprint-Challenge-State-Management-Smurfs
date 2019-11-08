import React, {useReducer, useState} from 'react'
import {initialState, reducer} from './reducer/reducer'
import axios from 'axios'



const setSmurfCreator = (name,age,height) => {
  // console.log(state)
  return { type: "SET_SMURF", payload: {
    name:name,
    age:age,
    height:`${height}cm`
   }}
}



export  const NewSmurfForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState("default");
  const [age, setAge] = useState(150);
  const [height, setHeight] = useState(80);


  //handlers
  const handleNameChange = event => {setName(event.target.value)};
  const handleAgeChange = event => {setAge(event.target.value)};
  const handleHeightChange = event => {setHeight(event.target.value)};

  const saveSmurf = () => {
    dispatch(setSmurfCreator(name, age, height));
    //axios//////////////////////////////////////////////////////////////////////////////////////////////
  };
  return (
    <div className="container">
      <div>
      <input
          type="text"
          name="name"
          onChange={handleNameChange}
          value={name}
        />
        <input
        type="number"
        name="age"
        onChange={handleAgeChange}
        value={age}
      />
      <input
          type="number"
          name="height"
          onChange={handleHeightChange}
          value={height}
        />
        <button onClick={saveSmurf}>Save Smurf</button>
      </div>
    </div>
  );
}