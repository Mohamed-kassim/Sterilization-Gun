import React from "react";
import {SignUpForm as StyledSignUpForm} from '_molecules'
const SignUpForm = ({navigation}) => {
  const navigate = (screen, params) => navigation.navigate(screen, params);
  const submit = (data)=> {
    console.log('create', data)
    navigate('AddAddress', {route: 'SignUp'})
  }
  const login = ()=> {
    navigate('Login')
  }

  return (
    <StyledSignUpForm  submit={submit} login={login} />
  );
};

export default SignUpForm;
