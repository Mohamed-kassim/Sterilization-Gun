import React from 'react'
import {
  ScrollView,
} from "react-native";

import { t } from "_i18n";
import {Divider, Block} from '_atoms'
import { Product, AddToCartButton} from "_organisms";
import {useGlobalState} from '_globalState'
import { Spacing } from "_styles";
const ProductDetails = ({navigation}) => {
  const [isLoggedIn, setIsLoggedIn] = useGlobalState('isLoggedIn')
  const addToCart = ()=>{
    (isLoggedIn)? navigation.navigate('Cart'): navigation.navigate('SignUp')
    
  }
    return (
      <Block style={{paddingBottom: Spacing.BASE * 4}}>
      <Product navigation={navigation}/>

        <AddToCartButton navigation={navigation} add={addToCart} />
      </Block>
    )
}

ProductDetails.navigationOptions = ({ navigation }) => {
    return {
      headerForceInset: { top: "never", bottom: "never" },
      title: t('ProductDetails.title'),
      headerStyle: { borderBottomWidth: 0 }
    };
  };
export default ProductDetails
