import React,{useState, useEffect} from "react";
import {AddAddress as AddAddressForm, AddressMap} from '_molecules'
import {Block, Map} from "_atoms";
import { ScrollView } from "react-native";
import Config from "react-native-config";
import { useGlobalState } from "_globalState";
import moment from "moment";
import axios from "axios";
const AddAddress = ({navigation}) => {

  const navigate = screen => navigation.navigate(screen);
  console.log(navigation.state)
  const {route} = navigation.state.params

  console.log(route)
  const save = (data)=> {
    console.log('save', data);
    (route==='Cart')?  navigate('OrderSummary') : navigate('Home')
   
  }
  const skip = ()=> {
    navigate('Home')
  }
  const [data, setData] = useState([]);
  const [token, setToken] = useGlobalState("token");
  useEffect(() => {
    const getData = async () => {
      const {
        data
      } = await axios.get(`${Config.BASE_URL}customers/me/`, {
        headers: { Authorization: token }
      });
      console.log('request data is ', data.data);
      setData(data.data);
    };
    getData();
  }, []);
  return (

    <AddAddressForm  save={save} skip={skip} data={data} route={route}/>
  );
};

export default AddAddress;
