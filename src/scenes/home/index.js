import React from "react";
import { SafeAreaView, TouchableHighlight, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Map from "../about/map";
import { t } from "_i18n";
import Icon from "react-native-vector-icons/FontAwesome";
import {
  Button,
  Block,
  Badge,
  Text,
  Switch,
  Divider,
  Rating,
  Card,
  Image,
  Input,
  // Section,
  HorizontalList
} from "_atoms";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Block center>
          <Text>Screen: Home</Text>
          <Text>{t("hello")}</Text>
          <TouchableHighlight onPress={() => navigation.navigate("About")}>
            <Text>Go to about</Text>
          </TouchableHighlight>
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
