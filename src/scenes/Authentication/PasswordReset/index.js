import React from 'react'
import {Block, Divider} from '_atoms'
import { t } from "_i18n";
import {ResetForm} from '_organisms'
const Reset = ({navigation}) => {
  return (
    <ResetForm navigation={navigation} />
  )
}
Reset.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t('ResetForm.title'),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default Reset
