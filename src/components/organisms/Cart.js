import React, {useState, useEffect} from "react";
import { Divider, Block, Text } from "_atoms";
import { ScrollView } from "react-native";
import { t } from "_i18n";
import { CartList, CheckoutButton, CartTotal } from "_organisms";
import { Spacing } from "_styles";
import Config from "react-native-config";
import { useGlobalState } from "_globalState";
import moment from "moment";
import axios from "axios";
const Cart = ({ navigation }) => {
  const checkout = () => {
    navigation.navigate("AddAddress",{route: 'Cart',test: 'dfsfsd'});
  };
  const [data, setData] = useState([]);
  const [token, setToken] = useGlobalState("token");
  useEffect(() => {
    const getData = async () => {
      console.log(Config.BASE_URL)
      const {
        data
      } = await axios.get(`${Config.BASE_URL}cart`, {
        headers: { Authorization: token }
      });
      console.log('request data is ', data.data);
      setData(data.data);
    };
    getData();
  }, []);

  const countPrice = ()=>{
    let total = 0
    data.map((item)=> {
      total += item.price
    })
    return(total)
  }
  return (
    <Block style={{paddingBottom: Spacing.BASE * 3.5}}>
      <CartTotal totalCount={data.length} totalPrice={countPrice()}/>
      <Divider flex={false} width="90%" style={{marginVertical: 0}}/>
      <CartList navigation={navigation} data={data}/>
      <Divider flex={false} width="90%" style={{marginTop: 0}} />
      <CheckoutButton navigation={navigation} checkout={checkout} />
    </Block>
  );
};

Cart.navigationOptions = ({ navigation }) => {
  return {
    headerForceInset: { top: "never", bottom: "never" },
    title: t("Cart.title"),
    headerStyle: { borderBottomWidth: 0 }
  };
};
export default Cart;
