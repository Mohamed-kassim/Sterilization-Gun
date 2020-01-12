import React from 'react'
import {
  ScrollView,
} from "react-native";

import { t } from "_i18n";
import {Divider} from '_atoms'
import { ProductSlider} from "_organisms";
import { Spacing } from "_styles";
const ProductDetails = () => {
    return (
      <ScrollView >
        <ProductSlider/>
        <Divider width={'92%'}/>
     </ScrollView>)
}

ProductDetails.navigationOptions = ({ navigation }) => {
    return {
      headerForceInset: { top: "never", bottom: "never" },
      title: t('ProductDetails.title'),
      headerStyle: { borderBottomWidth: 0 }
    };
  };
export default ProductDetails
