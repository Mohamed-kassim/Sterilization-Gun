import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'

const Initialization = ({navigation}) => {

    useEffect(() => {
        setTimeout(()=>{
            navigation.navigate('App')
        }, 1000)

    }, [])
    return (
        <View>
            <Text>loading</Text>
        </View>
    )
}

export default Initialization
