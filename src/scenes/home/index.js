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
  Section,
  HorizontalList
} from "_atoms";
import { Slider, Features } from "_molecules";
const HomeScreen = ({ navigation }) => {
  const menuItem = ({ item, index }) => {
    return (
      <Card
        padding={[0, 10, 0, 0]}
        cover={{
          uri: `https://picsum.photos/id/83${index}/300/400`,
          style: {
            width: 150,
            height: 150
          }
        }}
        title={item}
      />
    );
  };
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

        <Card
          touchable
          cover={{
            uri: `https://picsum.photos/100/300`,
            style: {
              width: 200,
              height: 300
            }
          }}
          horizontal
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
        <Slider
          // autoScrolled
          images={[
            `https://picsum.photos/id/866/1000/1000`,
            `https://picsum.photos/id/825/1000/1000`,
            `https://picsum.photos/id/810/1000/1000`,
            `https://picsum.photos/id/815/1000/1000`,
            `https://picsum.photos/id/510/1000/1000`,
            `https://picsum.photos/id/410/1000/1000`
          ]}
        />
        <Block padding={[0, 10]}>
          <Section Header={"Features"} centerMore more>
            <HorizontalList
              data={["Orange", "Apple", "Gawafa", "Keiwi"]}
              renderMenuItem={menuItem}
            />
          </Section>
        </Block>

        <Section Header={"Features"} headerPadding={10}>
          <Block>
            <Features
              images={[
                `https://picsum.photos/id/866/1000/1000`,
                `https://picsum.photos/id/825/1000/1000`,
                `https://picsum.photos/id/810/1000/1000`,
                `https://picsum.photos/id/815/1000/1000`,
                `https://picsum.photos/id/510/1000/1000`,
                `https://picsum.photos/id/410/1000/1000`
              ]}
            />
          </Block>
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
