import React, {useReducer} from 'react'
import { connect } from "react-redux";
import {fetchSmurfs} from './actions/actions'
 import {reducer} from './reducer/reducer'
 import axios from 'axios'



//console.log(state)
 axios
 .get(`http://localhost:3333/smurfs/`)
 .then(res => {
   const smurfs = res.data;
   return smurfs
  })
  .catch( err => console.log(err))
  
  
  
  
  
  //console.log(smurfs)
 const SmurfList = (smurfs) => {
   console.log(smurfs)
   const [state, dispatch] = useReducer(reducer, smurfs);


  return (
    <div className="container">
      <>
      



      {/*
      {props.isFetching && <div>⏰</div>}
      {props.error && <div>{props.error.message}</div>}
      <ul>
        {props.smurfs.map(p => (
          <li className="pokemon" key={p.name}>
            {p.name}, {p.age} years old, {p.height} tall!
          </li>
        ))}
      </ul>
        */}
      </>
      
    </div>
  );
}




const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps)(SmurfList);
