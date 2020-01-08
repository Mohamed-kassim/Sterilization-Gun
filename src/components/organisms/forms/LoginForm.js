import React from "react";
import {LoginForm as StyledLoginForm} from '_molecules'
const LoginForm = ({navigation}) => {
  const navigate = screen => navigation.navigate(screen);
  const create = ()=> {
    console.log('create')
    navigate('SignUp')
    
  }
  const submit = (data)=> {
    console.log('create', data)
  }  
  const forget = (data)=> {
    navigate('PasswordReset')
    console.log('create', data)
  }

  return (
    <StyledLoginForm create={create} submit={submit} forget={forget}/>
  );
};

export default LoginForm;
