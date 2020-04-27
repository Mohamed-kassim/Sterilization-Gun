import React, { useState, useRef } from "react";
import { Spacing, Typography, Colors } from "_styles";
import { Block, Text, Badge } from "_atoms";
import Swiper from "react-native-swiper";
import {
  TouchableOpacity,
  FlatList,
  Animated,
  StyleSheet,
  Dimensions,
  StatusBar
} from "react-native";
import Tone from "react-native-tone-android";
const timer = require("react-native-timer");

import Icon from "react-native-vector-icons/MaterialIcons";
import BottomSheet from "reanimated-bottom-sheet";
import { useTimer } from "react-timer-hook";
import InputSpinner from "react-native-input-spinner";

import LottieView from "lottie-react-native";
import LinearGradient from "react-native-linear-gradient";
import Slider from "@react-native-community/slider";

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const Home = () => {
  const { width, height } = Dimensions.get("window");
  const t = new Date();
  t.setSeconds(t.getSeconds() + 600);
  const scrollY = useRef(new Animated.Value(0)).current;
  const [on, setOn] = useState(false);
  const [time, setTime] = useState(t);
  const [minu, setMinutes] = useState(10);
  const [show, setShow] = useState(false);
  const [selectedVirus, setSelectedVirus] = useState({
    name: "No Virus",
    frequency: 0,
  });

  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: time,
    onExpire: () => {
      timer.clearInterval("tone");
      setOn(false);
    },
  });
  const [freq, setFreq] = useState(1000);
  const ref = useRef(null);
  let lotRef = useRef(null);
  const onPress = () => {
    ref.current.snapTo(2);
    ref.current.snapTo(2);
  };

  const renderContent = () => (
    <Block flex={false} color={"red"}>
      <AnimatedFlatList
        data={[
          { name: "Corona", frequency: 393 },
          { name: "Boreillia burgdorferi", frequency: 380 },
          { name: "cambylobacter pyloridis", frequency: 355 },
          { name: "Candida albiacns", frequency: 386 },
          { name: "Chlamydia Pneumoniae  ", frequency: 386 },
          { name: "Epsteina", frequency: 380.375 },
          { name: "Granderella Vaginaalis", frequency: 340 },
          { name: "Adenoiwirus", frequency: 393 },
          { name: "Boreillia burgdorferi", frequency: 380 },
          { name: "cambylobacter pyloridis", frequency: 355 },
          { name: "Candida albiacns", frequency: 386 },
          { name: "Chlamydia Pneumoniae  ", frequency: 386 },
          { name: "Epsteina", frequency: 380.37 },
          { name: "Granderella Vaginaalis", frequency: 340 },
          { name: "Adenoiwirus", frequency: 393 },
          { name: "Boreillia burgdorferi", frequency: 380 },
          { name: "cambylobacter pyloridis", frequency: 355 },
          { name: "Candida albiacns", frequency: 386 },
          { name: "Chlamydia Pneumoniae  ", frequency: 386 },
          { name: "Epsteina", frequency: 380.375 },
          { name: "Granderella Vaginaalis", frequency: 340 },
        ]}
        keyExtractor={(item) => item.email}
        renderItem={renderItem}
        style={{ backgroundColor: "white" }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: true,
          }
        )}
        scrollEventThrottle={16}
      />
    </Block>
  );

  const renderHeader = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          ref.current.snapTo(0);
          ref.current.snapTo(0);
        }}
      >
        <Block
          center
          style={{
            borderTopLeftRadius: Spacing.RADIUS,
            borderTopRightRadius: Spacing.RADIUS,
          }}
          middle
          color={"white"}
        >
          <Icon
            name={"keyboard-arrow-down"}
            size={Typography.FONT_SIZE_16 * 3}
            color="black"
          />
        </Block>
      </TouchableOpacity>
    );
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        alignItems: "flex-start",

        padding: 15,

        borderBottomColor: Colors.GRAY_MEDIUM,
        borderBottomWidth: 1,
      }}
      onPress={() => {
        setSelectedVirus(item);
        ref.current.snapTo(0);
        ref.current.snapTo(0);
      }}
    >
      <Text bold>{item.name}</Text>
      <Text bold gray>
        {item.frequency} KHZ
      </Text>
    </TouchableOpacity>
  );

  return (
    <>
      <BottomSheet
        ref={ref}
        initialSnap={0}
        snapPoints={[0, 300, 450]}
        enabledManualSnapping={true}
        renderContent={renderContent}
        renderHeader={renderHeader}
        style={{
          zIndex: 1222,
        }}
      />
      <Swiper loop={false} showsButtons={true}>
        <Block color={"#75ccb2"}>
          <Block
            center
            middle
            row
            style={{ position: "absolute", top: 0, right: 0 }}
          >
            <Text white h3 bold>
              Manual Controls
            </Text>
            <Icon
              name={"keyboard-arrow-right"}
              size={Typography.FONT_SIZE_16 * 2}
              color="white"
            />
          </Block>
          <Block padding={[Spacing.BASE * 2, 5]}>
            <Block flex={0.1} padding={[Spacing.BASE * 2, 0]}>
              <Block center>
                <Text color="#20124d" h3 bold>
                  Selected Virus: <Text white>{selectedVirus.name}</Text>
                </Text>
                <Text color="#20124d" h3 bold>
                  Frequency: <Text white>{selectedVirus.frequency} KHZ</Text>
                </Text>
              </Block>
            </Block>

            <Block center middle flex={0.75}>
              <Animated.View
                style={{
                  position: "absolute",
                  zIndex: 5,
                  bottom: height / 2.2,
                  right: width / 2.9,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <LottieView
                  ref={(x) => {
                    lotRef = x;
                  }}
                  source={require("_assets/animations/virus.json")}
                  //   autoPlay
                  loop={true}
                  speed={1}
                  style={{ width: width / 3, height: width / 3 }}
                />
              </Animated.View>
              <Block center middle padding={[90, 0, 0, 0]}>
                <Block
                  flex={false}
                  row
                  center
                  middle
                  shadow
                  radius={Spacing.RADIUS}
                  padding={[Spacing.BASE * 0, Spacing.PADDING_15]}
                >
                  <Text bold gray={!on}>
                    {on ? "Connected" : "Disconnected"}
                  </Text>
                  <Block
                    flex={false}
                    style={{
                      marginHorizontal: 5,
                      width: Spacing.BASE * 0.7,
                      height: Spacing.BASE * 0.7,
                      borderRadius: Spacing.RADIUS,
                    }}
                    color={on ? Colors.SUCCESS : `rgba(128,128,128, 0.5)`}
                  />
                </Block>
                <TouchableOpacity
                  onPress={() => {
                    let interval = null;
                    setOn((value) => !value);
                    if (on) {
                      console.log(interval);
                      timer.clearInterval("tone");

                      lotRef.reset();
                      restart(time);
                    } else {
                      lotRef.play();
                      start();
                      timer.setInterval(
                        "tone",
                        () => {
                          Tone.play(
                            selectedVirus.frequency === 0
                              ? freq / 1000
                              : selectedVirus.frequency,
                            500
                          );
                        },
                        500
                      );
                    }
                  }}
                  style={{
                    paddingVertical: 10,
                    padding: Spacing.BASE,

                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    locations={[0.1, 0.9]}
                    colors={["yellow", "#fffdb0"]}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: Spacing.BASE * 11,
                      width: Spacing.BASE * 11,
                      height: Spacing.BASE * 11,
                    }}
                  >
                    <Badge color={Colors.SECONDARY} size={Spacing.BASE * 10.5}>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        locations={[0.1, 0.9]}
                        colors={["yellow", "#fffdb0"]}
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: Spacing.BASE * 10,
                          width: Spacing.BASE * 10,
                          height: Spacing.BASE * 10,
                        }}
                      >
                        <Text h1 bold>
                          {on ? `${minutes + ":" + seconds}` : "Turn On"}
                        </Text>
                      </LinearGradient>
                    </Badge>
                  </LinearGradient>
                </TouchableOpacity>
              </Block>
            </Block>
            <Block flex={0.15}>
              <Block center middle flex={false}>
                <InputSpinner
                  max={20}
                  min={1}
                  step={1}
                  colorMax={Colors.SECONDARY}
                  colorMin={Colors.SECONDARY}
                  value={minu}
                  onChange={(num) => {
                    setMinutes(num);
                    console.log(num);
                    const L = new Date();
                    L.setSeconds(L.getSeconds() + num * 60);
                    console.log(L);
                    setTime(L);
                  }}
                />
              </Block>
              <TouchableOpacity
                onPress={onPress}
                style={{
                  padding: Spacing.BASE * 0.5,
                  paddingLeft: 40,
                  justifyContent: "center",
                  alignItems: "flex-end",
                  flexDirection: "row",
                }}
              >
                <Block row center middle>
                  <Text color={"#20124d"} title bold>
                    Choose Sterilization
                  </Text>
                  <Icon
                    name={"keyboard-arrow-down"}
                    size={Typography.FONT_SIZE_16 * 2}
                    color="#20124d"
                  />
                </Block>
              </TouchableOpacity>
            </Block>
          </Block>
        </Block>
        <Block center middle color={"#EAF1EE"} padding={[Spacing.BASE * 0, 5]}>
          <Block flex={false} style={{ marginVertical: 20 }}>
            <Block margin={[55, 0]} flex={false}>
              <Text center bold h1 color={Colors.ACCENT}>
                {" "}
                Manual Control
              </Text>
            </Block>
            <Block
              flex={false}
              center
              middle
              color={Colors.GRAY_LIGHT}
              style={{ width: 300, height: 100, borderRadius: Spacing.RADIUS }}
            >
              <Text style={{ marginVertical: 20 }} bold h3>
                {freq / 1000} khz
              </Text>
            </Block>
            <Slider
              style={{ width: 300, height: 40 }}
              value={freq}
              step={1000}
              onValueChange={(val) => setFreq(val)}
              minimumValue={0}
              maximumValue={100000}
              thumbTintColor={"black"}
              minimumTrackTintColor={Colors.PRIMARY}
              maximumTrackTintColor={Colors.SECONDARY}
            />
          </Block>
          <Block row flex={false}>
            <TouchableOpacity
              onPress={() => setFreq(1000000)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>1M</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFreq(100000)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>100K</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setFreq(10000)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>10K</Text>
            </TouchableOpacity>
          </Block>
          <Block row flex={false}>
            <TouchableOpacity
              onPress={() => setFreq(1000)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>1kHz</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setFreq(100)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>100Hz</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setFreq(10)}
              style={{
                backgroundColor: Colors.SECONDARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>10HZ</Text>
            </TouchableOpacity>
          </Block>
          <Block row flex={false} margin={[20]}>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>Sine</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>Sqr</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>Tri</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                backgroundColor: Colors.PRIMARY,
                borderRadius: Spacing.RADIUS,
                padding: 20,
                margin: 5,
              }}
            >
              <Text bold>Sweep</Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </Swiper>
    </>
  );
};

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

export default Home;
