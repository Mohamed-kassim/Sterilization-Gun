import React from "react";
import {ResetForm as StyledResetForm} from '_molecules'
const ResetForm = ({navigation}) => {
  const navigate = screen => navigation.navigate(screen);
  const reset = (data)=> {
    console.log('create', data)
  }
  const login = ()=> {
    navigate('Login')
  }

  return (
    <StyledResetForm  reset={reset} login={login} />
  );
};

export default ResetForm;
