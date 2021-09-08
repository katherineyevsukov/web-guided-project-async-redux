const FETCH_START = "FETCH_START";
const FETCH_SUCCESS = "FETCH_SUCCESS";
const FETCH_FAIL = "FETCH_FAIL";


const fetchStart = ()=> {
    return({type: FETCH_START});
}

const fetchSuccess = (person)=> {
    return({type: FETCH_SUCCESS, payload:person})
}