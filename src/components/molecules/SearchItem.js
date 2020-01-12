import React from 'react'
import {Card,Block, Text, Rating, Divider} from '_atoms'
import { Spacing } from '_styles';
import { Colors } from '_styles';

const SearchItem = ({item, navigation}) => {
        return (
          <Card
          touchable
          horizontal
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
            <Block padding={[Spacing.BASE*.5,0]}>
              <Text weight={'400'} numberOfLines={4} title>{item.title} </Text>
              <Text style={{marginTop: Spacing.BASE*.4}} weight={'400'} body gray>{item.price}$</Text>
              <Block padding={[Spacing.BASE*.5,0]}>
              <Rating rating={item.rating} color={Colors.PRIMARY} size={Spacing.BASE} number />
              </Block>
            </Block>
          </Card>
        );
}

export default SearchItem
