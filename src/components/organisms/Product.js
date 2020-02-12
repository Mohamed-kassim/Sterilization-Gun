import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";

import { t } from "_i18n";
import { Divider, Text, Block, Rating, Section } from "_atoms";
import {
  ProductSlider,
  ProductTitle,
  ProductPrice,
  ProductRating,
  RelatedItems,
  ProductDescription,
  ProductFeatures,
  ProductSpecs,
  ProductVariants
} from "_organisms";
import { Spacing, Colors } from "_styles";
import { amazonResponse, walmart } from "_mocks";
import { Typography } from "_styles";
const Product = ({ navigation }) => {
  const {
    images,
    title,
    rating,
    brand,
    price,
    current_variant,
    other_variants,
    description,
    features,
    specs
  } = walmart.data;
  const [variant, setVariant] = useState(current_variant);

  return (
    <ScrollView>
      <ProductSlider images={images} />
      <Block>
        <ProductTitle title={title} brand={brand} />
        <Block center space={"between"} row padding={[0, Spacing.BASE * 0.5]}>
          <ProductRating rating={rating} />
          <ProductPrice price={price} />
        </Block>

        {/* <Text bold>Variant: </Text> */}
        <ProductVariants
          variant={variant}
          setVariant={setVariant}
          other_variants={other_variants}
        />
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
        <ProductDescription description={description} />
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
        <ProductFeatures features={features} />
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
        <ProductSpecs specs={specs} />
        <Divider width={"92%"} />
        <RelatedItems navigation={navigation} />
      </Block>
    </ScrollView>
  );
};

export default Product;
