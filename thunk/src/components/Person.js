import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStart, fetchSuccess, fetchFail } from './../actions';

import axios from 'axios';

const Person = (props) => {
  const { person, isFetching, error } = props;
  
  useEffect(() => {
  });

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = ()=> {
    //1. dispatch(fetchStart);
    props.fetchStart();
    //2. axios call
    axios.get("https://randomuser.me/api/")
      .then(resp=> {
        //3. If axios call success, dispatch(fetchSuccess)
        props.fetchSuccess(resp.data.results[0]);
      })
      .catch(err=>{
        //4. If axios call fails, dispatch(fetchFail)
        props.fetchFail(err);
      });
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large}/>
      </div>
      <button onClick={handleClick}>Get new person</button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { fetchStart, fetchSuccess, fetchFail })(Person);