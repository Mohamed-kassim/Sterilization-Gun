import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const VariantButton = ({selectedItem, data,variant, setVariant}) => {
    return (
        <Menu
            onChange={value => {
              console.log(value.variant);
              setVariant(value);
            }}
            firstTitleText={selectedItem}
            itemButtonTextStyle={styles.itemButtonTextStyle}
            itemButtonStyle={styles.itemButtonStyle}
            selectedKey={variant}
            labelExtractor={item => item.variant}
            data={data}
          />
    )
}

const style = StyleSheet.create({
    itemButtonStyle: {
        alignSelf: 'center',
        backgroundColor: Colors.PRIMARY,
        // width: "80%",
        paddingHorizontal: Spacing.PADDING_15,
        borderRadius: Spacing.RADIUS,
        height: Spacing.BASE * 2.5,
        justifyContent: "center",
        alignItems: "center"
      },
    itemButtonTextStyle:{
        fontSize: Typography.FONT_SIZE_TITLE,
        fontWeight: "bold"
      }
})
export default VariantButton
