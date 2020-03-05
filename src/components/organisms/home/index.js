import React from 'react'
import LottieView from 'lottie-react-native';
import {Block, Text} from '_atoms';


const index = () => {
    return (
        <Block center middle>
            <Text h1 bold style={{marginBottom: 100}}> Welcome </Text>
            <LottieView source={require('../../../assets/animations/bird.json')} autoPlay loop style={{height: 200, width: 200}}/>
        </Block>
    )
}


export default index
