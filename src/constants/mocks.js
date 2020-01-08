import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Spacing } from "_styles";
import { Colors } from "_styles";
import { t } from "_i18n";
const retailerData = [
  { id: "AMAZON_CA", name: "Amazon" },
  { id: "WALMART_CA ", name: "Walmart" },
  { id: "ALIEXPRESS", name: "AliExpress" }
];

const SignUpFields = [
  {
    id: "first_name",
    name: "First Name",
    icon: <Icon name="user" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "last_name",
    name: "Last Name",
    icon: <Icon name="user" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE} color={Colors.GRAY_DARK} />
  },
  {
    id: "password",
    name: "Password",
    icon: null
  },
  {
    id: "confirm_password",
    name: "Confirm Password",
    icon: null
  },
  {
    id: "phone",
    name: "Phone Number",
    icon: <Icon name="phone" size={Spacing.BASE} color={Colors.Black} />
  }
];

const LoginFields = [
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE}  />
  },
  {
    id: "password",
    name: "Password",
    icon: null
  },

]
const ResetFields = [
  {
    id: "email",
    name: "E-mail",
    icon: <Icon name="envelope" size={Spacing.BASE}  />
  },
]

export { retailerData, SignUpFields, LoginFields, ResetFields };
