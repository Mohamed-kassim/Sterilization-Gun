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
import { Slider, Features, FieldInput } from "_molecules";
import { SignUpFields } from "_mocks";
const AboutScreen = ({ navigation }) => {
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
  console.log('7')
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
          <Button gradient row space={"around"} normal>
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
            border
            rounded
            rightLabel={<Icon name="comments" size={20} color="blue" />}
            placeholder="password"
            mandatory
            // secure
            // error
            // errMsg={"Error in this field"}
            // primary
            gray3
            label="Confirm Password"
          />
          <Button row style={{ backgroundColor: "red" }} space={"between"}>
            <Block space={"between"} center row>
              <Icon name="home" size={20} color="blue" />
              <Text>home</Text>
            </Block>
            <Icon name="arrow-right" size={20} color="blue" />
          </Button>
          <Button gradient>
            <Block center row>
              <Icon name="home" size={20} color="blue" />
              <Text>home</Text>
            </Block>
          </Button>
        </Block>
        <Block padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
          <FieldInput
            errMsg={"Error in this field"}
            icon={SignUpFields[0].icon}
            placeholder={SignUpFields[0].name}
          />
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

export default AboutScreen;
