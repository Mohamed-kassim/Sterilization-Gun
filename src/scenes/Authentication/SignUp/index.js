import React from 'react'
import {Block, Divider} from '_atoms'
import { t } from "_i18n";
import {SignUpForm} from '_organisms'
const SignUp = ({navigation}) => {
  return (
    <SignUpForm navigation={navigation} />
  )
}


SignUp.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t('SignUpForm.title'),
    headerStyle: { borderBottomWidth: 0 }
  };
};

export default SignUp
