import React from "react";
import { SafeAreaView, TouchableHighlight, ScrollView } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import Map from "./map";
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
  Input
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
          <Rating rating={2} number />
          <Button gradient row normal>
            <Icon name="comments" size={30} color="white" />
            <Text>normal button</Text>
          </Button>
          <Button>
            <Text>Full button</Text>
          </Button>
          <Button size={50} color={"black"} circular>
            <Icon name="comments" size={30} color="white" />
          </Button>
          <Divider height={3} width={50} />
          <Badge color={"rgba(255, 0, 0, 0.6)"} size={60}>
            <Badge color={"red"} size={40}></Badge>
          </Badge>
          <Text bold primary center h1>
            normal button
          </Text>
          <Switch />
          <Image
            style={{
              width: 200,
              height: 300
            }}
            uri={`https://picsum.photos/200/300`}
          />
          <Divider />
          <Card
            touchable
            cover={{
              uri: `https://picsum.photos/200/300`,
              style: {
                width: 200,
                height: 300
              }
            }}
            primary
            title="Card Titlsdfdsfe"
            subtitle="Card subtitle test"
            actions={[
              {
                icon: <Icon name="user" size={30} color="blue" />,
                onPress: () => {}
              },
              {
                icon: <Icon name="comments" size={30} color="blue" />,
                onPress: () => {}
              },
              {
                icon: <Icon name="comments" size={30} color="blue" />,
                onPress: () => {}
              }
            ]}
          >
            <Block center>
              <Rating rating={4.5} color={"blue"} size={20} number />
            </Block>
          </Card>
          <Input
            // border
            // rounded
            placeholder="password"
            mandatory
            secure
            errMsg={"Error in this field"}
            // primary
            gray3
            label="Confirm Password"
          />
        </Block>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
