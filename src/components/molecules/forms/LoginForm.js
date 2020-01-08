import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { Block, Divider, Text, Button } from "_atoms";
import { FieldInput, Logo } from "_molecules";
import { Spacing } from "_styles";
import { LoginFields } from "_mocks";
import { t } from "_i18n";
const { width, height } = Dimensions.get("window");
const LoginForm = ({ submit, forget, create }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const renderLogo = () => (
    <Block center middle style={{ paddingTop: height * 0.1 }}>
      <Logo size={Spacing.BASE * 15} />
    </Block>
  );

  const setValue = (value, field)=> {
    eval(`set${capitalizeFirstLetter(field)}('${value}')`)
  }
  const renderFields = () =>
    LoginFields.map(field => {
      return (
        <FieldInput
          key={field.id + field.name}
          errMsg={"Error in this field"}
          secure={field.name === "Password"}
          icon={field.icon}
          onChangeText={(text)=> setValue(text, field.id)}
          placeholder={t(`loginform.placeholders.${field.id}`)}
          label={t(`loginform.placeholders.${field.id}`)}
        />
      );
    });

  const renderButtons = () => (
    <Block center>
      <Button
        full
        color={"primary"}
        style={{ marginTop: Spacing.BASE * 2 }}
        onPress={() => {
          submit({ email, password });
        }}
      >
        <Text center bold>
          {" "}
          {t("loginform.buttons.login")}
        </Text>
      </Button>
      <Text
        center
        onPress={() => {
          forget(email);
        }}
      >
        {t("loginform.buttons.forget")}
      </Text>
      <Button
        normal
        onPress={() => {
          create();
        }}
        shadow
        style={{ marginTop: Spacing.BASE * 2 }}
      >
        <Text center bold>
          {t("loginform.buttons.register")}{" "}
        </Text>
      </Button>
    </Block>
  );

  return (
    <KeyboardAwareScrollView>
      <Block middle padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
        {renderLogo()}
        <Text center body>
          {t("loginform.welcome")}
        </Text>
        <Divider width={"92%"} />
        {renderFields()}
        {renderButtons()}
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default LoginForm;
