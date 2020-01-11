import React from 'react'
import {Block, Divider} from '_atoms'
import {AddAddress as AddAddressForm} from '_organisms'
const AddAddress = ({navigation}) => {
  return (
    <AddAddressForm navigation={navigation} />
  )
}
AddAddress.navigationOptions = {
  header: null
}
export default AddAddress
