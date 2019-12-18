import React from "react";
import { SafeAreaView, TouchableHighlight } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Map from "./map";
import { t } from "_i18n";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button, Block, Badge, Text, Switch, Divider } from "_atoms";
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block center>
        <Text>Screen: Home</Text>
        <Text>{t("hello")}</Text>
        <TouchableHighlight onPress={() => navigation.navigate("About")}>
          <Text>Go to about</Text>
        </TouchableHighlight>
        <Button row normal>
          <Icon name="comments" size={30} color="white" />
          <Text>normal button</Text>
        </Button>
        <Button gradient full>
          <Text bold white spacing={15}>
            normal button
          </Text>
        </Button>
        <Button size={50} color={"black"} circular>
          <Icon name="comments" size={30} color="white" />
        </Button>
        <Divider flex={false} />
        <Badge color={"rgba(255, 0, 0, 0.6)"} size={60}>
          <Badge color={"red"} size={40}></Badge>
        </Badge>
        <Text bold primary center h1>
          normal button
        </Text>
        <Switch />
      </Block>
    </SafeAreaView>
  );
};

export default HomeScreen;
