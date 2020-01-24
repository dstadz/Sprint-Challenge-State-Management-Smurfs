import React from "react";
import {connect} from 'react-redux'
import NewSmurfForm from './NewSmurfForm'
import SmurfList from './SmurfList'
import {fetchSmurfs} from './actions/actions'
import "./App.css";


//console.log(state)
const App = () => {

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
 
      <NewSmurfForm />
      <SmurfList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchSmurfs: smurfs => dispatch(fetchSmurfs(smurfs))
})
export default connect(null, mapDispatchToProps )(App);
