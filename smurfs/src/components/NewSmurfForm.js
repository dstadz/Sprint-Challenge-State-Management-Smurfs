import React, {useReducer, useState} from 'react'
import { connect } from "react-redux";




const setSmurfCreator = (name,age,height) => {
  // console.log(state)
  return { type: "SET_SMURF", payload: {
    name:name,
    age:age,
    height:`${height}cm`
   }}
}



const NewSmurfForm = (props) => {
  console.log(props)
  const [name, setName] = useState("default");
  const [age, setAge] = useState(150);
  const [height, setHeight] = useState(80);


  //handlers
  const handleNameChange = event => {setName(event.target.value)};
  const handleAgeChange = event => {setAge(event.target.value)};
  const handleHeightChange = event => {setHeight(event.target.value)};

  const saveSmurf = () => {
    props.dispatch(setSmurfCreator(name, age, height));
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


const mapStateToProps = state => ({
  ...state
})
export default connect(mapStateToProps)(NewSmurfForm);