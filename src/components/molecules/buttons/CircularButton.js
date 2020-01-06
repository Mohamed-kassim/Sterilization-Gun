import React from 'react'
import {Button} from '_atoms'
import { Spacing } from '_styles'
import Icon from "react-native-vector-icons/FontAwesome";
const CircularButton = ({icon, color, bgColor, onPress}) => {
    return (
        <Button onPress={onPress} size={Spacing.BASE*2.5} color={bgColor} circular>
        <Icon name={icon} size={Spacing.BASE*1.5} color= {color} />
      </Button>
    )
}

export default CircularButton
