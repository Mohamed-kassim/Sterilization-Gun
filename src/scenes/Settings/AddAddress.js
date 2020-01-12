import React from 'react'
import {Block, Divider} from '_atoms'
import {AddAddress as AddAddressForm} from '_organisms'
import { t } from "_i18n";
const AddAddress = ({navigation}) => {
  return (
    <AddAddressForm navigation={navigation} />
  )
}
AddAddress.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t('AddAddress.title'),
    headerStyle: { borderBottomWidth: 0 }
  };
};

export default AddAddress
