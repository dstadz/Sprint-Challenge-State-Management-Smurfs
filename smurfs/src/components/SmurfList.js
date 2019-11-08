import React, {useReducer} from 'react'
import { connect } from "react-redux";
import {fetchSmurfs} from './actions/actions'
import {reducer} from './reducer/reducer'
import { FETCH_SMURFS } from "./actions/actions";





//console.log(smurfs)
const SmurfList = (props) => {

  
return (
    <>
      <button onClick={() => props.dispatch(fetchSmurfs())}>  Get Smurfs  </button>

      <ul>
      {props.smurfs.map(p => (
        <li key={p.name}>
          {p.name} is {p.age} years old and {p.height} tall!
        </li>
        ))}
      </ul>
    </>
  );
}




const mapStateToProps = state => ({
  ...state
})
export default connect(state => {
  console.log('mapStateToProps',state);
  return state;
})(SmurfList);

