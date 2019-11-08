import axios from 'axios'

export const FETCH_SMURF_LOADING = "FETCH_SMURF_LOADING";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_FAILED = "FETCH_SMURF_FAILED";

export const FETCH_SMURFS = "FETCH_SMURFS";


export const smurfsLoading = () => ({ type: FETCH_SMURF_LOADING });

export const smurfLoadSuccess = data => ({
  type: FETCH_SMURF_SUCCESS,
  payload: data
});
export const smurfLoadFailure = error => ({
  type: FETCH_SMURF_FAILED,
  payload: error
});

export const fetchSmurfs = () => {
  return function(dispatch) {
    dispatch(smurfsLoading());

    return axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => {
      console.log(res.data)
      dispatch(smurfLoadSuccess(res.data))
    })
    .catch( err => dispatch(smurfLoadFailure(err)))
  }
}