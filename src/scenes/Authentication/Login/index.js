import React from 'react'
import {Block, Divider} from '_atoms'
import {LoginForm} from '_organisms'
const Login = ({navigation}) => {
  return (
    <LoginForm navigation={navigation} />
  )
}
Login.navigationOptions = {
  header: null
}
export default Login
