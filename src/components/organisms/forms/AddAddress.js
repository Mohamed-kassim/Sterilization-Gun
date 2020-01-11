import React from "react";
import {AddAddress as AddAddressForm, AddressMap} from '_molecules'
import {Block, Map} from "_atoms";
import { ScrollView } from "react-native";
const AddAddress = ({navigation}) => {
  const navigate = screen => navigation.navigate(screen);
  const save = (data)=> {
    console.log('save', data)
    navigate('Home')
  }
  const skip = ()=> {
    navigate('Home')
  }

  return (

    <AddAddressForm  save={save} skip={skip} />
  );
};

export default AddAddress;
