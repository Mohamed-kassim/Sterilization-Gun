import React, { useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Dimensions } from "react-native";
import { Block, Divider, Text, Button } from "_atoms";
import { FieldInput, Logo } from "_molecules";
import { Spacing } from "_styles";
import { SignUpFields } from "_mocks";
import { t } from "_i18n";
const { width, height } = Dimensions.get("window");
const SignUpForm = ({ submit, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [phone, setPhone] = useState("");
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  const renderLogo = () => (
    <Block center middle>
      <Logo size={Spacing.BASE * 15} />
    </Block>
  );

  const setValue = (value, field) => {
    eval(`set${capitalizeFirstLetter(field)}('${value}')`);
  };
  const renderFields = () =>
    SignUpFields.map(field => {
      return (
        <FieldInput
          key={field.id + field.name}
          errMsg={"Error in this field"}
          secure={
            field.name === "Password" || field.name === "Confirm Password"
          }
          
          icon={field.icon}
          onChangeText={text => setValue(text, field.id)}
          placeholder={t(`SignUpForm.placeholders.${field.id}`)}
          label={t(`SignUpForm.placeholders.${field.id}`)}
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
            submit({ first_name, last_name, email, phone, password});
        }}
      >
        <Text center bold>
          {" "}
          {t("SignUpForm.buttons.register")}
        </Text>
      </Button>
      <Text
        center
        onPress={() => {
            login()
        }}
      >
        {t("SignUpForm.buttons.login")}{" "}
        <Text bold primary>
          {t("SignUpForm.buttons.clickable-login")}
        </Text>
      </Text>
    </Block>
  );

  return (
    <KeyboardAwareScrollView>
      <Block middle padding={[Spacing.PADDING_15, Spacing.PADDING_15]}>
        {renderLogo()}
        <Text center body>
          {t("SignUpForm.welcome")}
        </Text>
        <Divider width={"92%"} />
        {renderFields()}
        {renderButtons()}
      </Block>
    </KeyboardAwareScrollView>
  );
};

export default SignUpForm;
