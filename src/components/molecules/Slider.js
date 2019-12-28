import React, { useRef, useState, useEffect } from 'react'
import { StyleSheet, Animated, Dimensions, ScrollView } from 'react-native'
import { Block, Text, Image, Button } from '_atoms'
import { Colors } from '_styles';
const { height, width } = Dimensions.get('window')
const scrollX = new Animated.Value(0);

const Slider = ({ images, autoScrolled, imageStyle }) => {
    const scroll = useRef('')
    let count = 0
    useEffect(() => {
        console.log(autoScrolled)
        if (autoScrolled) {
            const interval = setInterval(() => {
                if (scroll.current) {
                    scroll.current.scrollTo({
                        x: width * count
                    })
                }
                count = (count < images.length - 1) ? count + 1 : 0
            }, 2000)
            return () => {
                clearInterval(interval);
            }
        }
    }, [])
    const renderDots = () => {
        const dotPosition = Animated.divide(scrollX, width);

        return (
            <Block flex={false} row center middle style={styles.dotsContainer}>
                {images.map((item, index) => {
                    const opacity = dotPosition.interpolate({
                        inputRange: [index - 1, index, index + 1],
                        outputRange: [0.5, 1, 0.5],
                        extrapolate: 'clamp'
                    });
                    return (
                        <Animated.View
                            key={`step-${item}-${index}`}
                            style={[styles.dots, { opacity }]}
                        />
                    )
                })}
            </Block>
        )
    }
    return (
        <Block>
            <ScrollView
                ref={scroll}

                horizontal
                pagingEnabled
                scrollEnabled
                showsHorizontalScrollIndicator={false}
                decelerationRate={0}
                scrollEventThrottle={16}
                snapToAlignment="center"
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }])}
            >
                {
                    images.map((img, index) =>
                        <Image
                            key={`${index}-${img}`}
                            source={{ uri: img }}
                            resizeMode='cover'
                            style={[{ width, height: width }, imageStyle]}
                        />
                    )
                }
            </ScrollView>
            {renderDots()}
        </Block>
    )
}

export default Slider

const styles = StyleSheet.create({
    dotsContainer: {
        position: 'absolute',
        bottom: 36,
        right: 0,
        left: 0
    },
    dots: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 6,
        backgroundColor: Colors.GRAY_DARK,
    },
})