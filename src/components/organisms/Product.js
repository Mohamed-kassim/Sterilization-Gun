import React, { useRef, useState } from "react";
import { ScrollView } from "react-native";
import Menu from "react-native-menu-list";
import { t } from "_i18n";
import { Divider, Text, Block, Rating, Section } from "_atoms";
import {
  ProductSlider,
  ProductTitle,
  ProductPrice,
  ProductRating,
  RelatedItems,
  ProductDescription
} from "_organisms";
import { Spacing, Colors } from "_styles";
import { amazonResponse, walmart } from "_mocks";
import { Typography } from "_styles";
const Product = ({ navigation }) => {
  const menuRef = useRef(null);
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
        <Block middle padding={[Spacing.BASE*.7, Spacing.BASE * 0.5]}>
          <Menu
            onChange={value => {
              console.log(value.variant);
              setVariant(value);
            }}
            firstTitleText={["Blue", "34x32"]}
            itemButtonTextStyle={{
              fontSize: Typography.FONT_SIZE_TITLE,
              fontWeight: "bold"
            }}
            itemButtonStyle={{
              alignSelf: 'center',
              backgroundColor: Colors.PRIMARY,
              // width: "80%",
              paddingHorizontal: Spacing.PADDING_15,
              borderRadius: Spacing.RADIUS,
              height: Spacing.BASE * 2.5,
              justifyContent: "center",
              alignItems: "center"
            }}
            selectedKey={variant}
            ref={menuRef}
            labelExtractor={item => item.variant}
            data={other_variants}
          />
        </Block>
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
            <ProductDescription description={description}/>
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
        <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
          <Section
            Header={"Features"}
            headerStyle={{ fontSize: Typography.FONT_SIZE_BODY }}
          >
            <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
              {features.map(feature => (
                <Text body>
                  <Text title>•</Text> {feature}
                </Text>
              ))}
            </Block>
          </Section>
        </Block>
        <Divider width={"92%"} style={{ marginVertical: 5 }} />
        <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
          <Section
            Header={"Specifications"}
            headerStyle={{ fontSize: Typography.FONT_SIZE_BODY }}
          >
            <Block padding={[Spacing.BASE * 0.5, Spacing.BASE * 0.5]}>
              {specs.map(spec => (
                <Text>{spec}</Text>
              ))}
            </Block>
          </Section>
        </Block>
        <Divider width={"92%"} />
        <RelatedItems navigation={navigation} />
      </Block>
    </ScrollView>
  );
};

export default Product;
