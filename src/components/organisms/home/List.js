import React, { useRef, forwardRef } from "react";
import { StyleSheet, View, TouchableOpacity, Animated } from "react-native";
import { Text } from "_atoms";
import { Modalize } from "react-native-modalize";

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(
  TouchableOpacity
);

export default (List = forwardRef((_, modalizeRef,...props) => {

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScrollToTop = () => {
    if (modalizeRef.current) {
      modalizeRef.current.scrollTo({
        y: 0,
        animated: true,
      });
    }
  };

  const renderFloatingComponent = () => (
    <AnimatedTouchableOpacity
      style={[
        s.floating,
        {
          opacity: scrollY.interpolate({
            inputRange: [100, 200],
            outputRange: [0, 1],
            extrapolate: "clamp",
          }),
          transform: [
            {
              scale: scrollY.interpolate({
                inputRange: [100, 150],
                outputRange: [0.6, 1],
                extrapolate: "clamp",
              }),
            },
          ],
        },
      ]}
      onPress={handleScrollToTop}
      activeOpacity={0.75}
    >
      <Text style={s.floating__text}>Top</Text>
    </AnimatedTouchableOpacity>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        modalizeRef.current.close()
        _.setSelectedVirus(item);
      }}
      style={s.item}
    >
      <Text bold style={s.item__name}>
        {item.name}
      </Text>
      <Text bold gray style={s.item__email}>
        {item.frequency} KHZ
      </Text>
    </TouchableOpacity>
  );

  return (
    <Modalize
      ref={modalizeRef}
      FloatingComponent={renderFloatingComponent}
      flatListProps={{
        data: [
          { name: "Corona", frequency: "393" },
          { name: "Boreillia burgdorferi", frequency: "380" },
          { name: "cambylobacter pyloridis", frequency: "355" },
          { name: "Candida albiacns", frequency: "386" },
          { name: "Chlamydia Pneumoniae  ", frequency: "386" },
          { name: "Epsteina", frequency: "380.375" },
          { name: "Granderella Vaginaalis", frequency: "340" },
          { name: "Adenoiwirus", frequency: "393" },
          { name: "Boreillia burgdorferi", frequency: "380" },
          { name: "cambylobacter pyloridis", frequency: "355" },
          { name: "Candida albiacns", frequency: "386" },
          { name: "Chlamydia Pneumoniae  ", frequency: "386" },
          { name: "Epsteina", frequency: "380.375" },
          { name: "Granderella Vaginaalis", frequency: "340" },
          { name: "Adenoiwirus", frequency: "393" },
          { name: "Boreillia burgdorferi", frequency: "380" },
          { name: "cambylobacter pyloridis", frequency: "355" },
          { name: "Candida albiacns", frequency: "386" },
          { name: "Chlamydia Pneumoniae  ", frequency: "386" },
          { name: "Epsteina", frequency: "380.375" },
          { name: "Granderella Vaginaalis", frequency: "340" },
        ],
        renderItem: renderItem,
        keyExtractor: (item) => item.email,
        showsVerticalScrollIndicator: false,
        onScroll: Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        ),
        scrollEventThrottle: 16,
      }}
    />
  );
}));

const s = StyleSheet.create({
  item: {
    alignItems: "flex-start",

    padding: 15,

    borderBottomColor: "#f9f9f9",
    borderBottomWidth: 1,
  },

  item__name: {
    fontSize: 16,

    marginBottom: 5,
  },

  item__email: {
    fontSize: 14,
    fontWeight: "200",
    color: "#666",
  },

  floating: {
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999,

    position: "absolute",
    right: 20,
    bottom: 20,

    width: 60,
    height: 60,

    borderRadius: 30,
    backgroundColor: "#333",
  },

  floating__text: {
    fontSize: 16,
    color: "#fff",
  },
});
