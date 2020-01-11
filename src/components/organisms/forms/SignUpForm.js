import React from "react";
import {SignUpForm as StyledSignUpForm} from '_molecules'
const SignUpForm = ({navigation}) => {
  const navigate = screen => navigation.navigate(screen);
  const submit = (data)=> {
    console.log('create', data)
    navigate('AddAddress')
  }
  const login = ()=> {
    navigate('Login')
  }

  return (
    <StyledSignUpForm  submit={submit} login={login} />
  );
};

export default SignUpForm;
