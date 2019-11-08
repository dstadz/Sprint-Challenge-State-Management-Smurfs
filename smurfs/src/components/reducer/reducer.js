import { FETCH_SMURFS } from "../actions/actions";
import { FETCH_SMURF_LOADING } from "../actions/actions";
import { FETCH_SMURF_SUCCESS } from "../actions/actions";
import { FETCH_SMURF_FAILED } from "../actions/actions";
import axios from 'axios'

export const initialState = {
  smurfs: [{"name":"Brainey","age":200,"height":"5cm","id":0}],
  error: null,
  isFetching: false
}

axios
  .get(`http://localhost:3333/smurfs/`)
  .then(res => {
    const smurfs = res.data;
    return smurfs
   })
   .catch( err => console.log(err))

export const reducer = (state=initialState , action) => {
  console.log("reducer", action.payload);
  switch (action.type) {
    case "SET_SMURF":
      const newSmurf = {...action.payload}
      axios
      .post(`http://localhost:3333/smurfs`, newSmurf)
      .then(res => {console.log(res)})
      .catch( err => console.log(err))
      return { ...state, smurfs: [...state.smurfs, newSmurf]};

    case FETCH_SMURF_LOADING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
        error: null
      };
    case FETCH_SMURF_FAILED:
      return {
        ...state,
        smurfs: [],
        isFetching: false,
        error: action.payload
      };
    default:
        return state;
    }
}

export default reducer;
