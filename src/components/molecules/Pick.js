import React from 'react'
import {Card,Block, Text} from '_atoms'
import { Spacing } from '_styles';

const HorizontalTile = ({item, navigation}) => {
        return (
          <Card
          touchable
            style={{marginHorizontal: Spacing.PADDING_15*.5,marginBottom:Spacing.PADDING_15,   borderRadius: Spacing.RADIUS}}
            shadow
            cover={{
              uri: item.image_url,
              style: {
                width: Spacing.BASE*8,
                height: Spacing.BASE*9.5,
              }
            }}
          onPress={()=> navigation.navigate('ProductDetails')}
           
          >
            <Block center middle padding={[Spacing.BASE*.2]}>
              <Text bold caption >{item.title} </Text>
              <Text style={{marginTop: Spacing.BASE*.4}} bold caption gray>{item.price} </Text>
              </Block>
          </Card>
        );
}

export default HorizontalTile
