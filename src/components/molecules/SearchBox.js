import React, { useState, useRef } from "react";
import { StyleSheet, ActivityIndicator } from "react-native";
import { Input, Block } from "_atoms";
import Icon from "react-native-vector-icons/FontAwesome";
import Menu from "react-native-menu-list";
import { retailerData } from "_mocks";
import { Colors } from "_styles";
import { Spacing } from "_styles";

const SearchBox = ({Search,  Loading, setLoading}) => {
  const menuRef = useRef(null);

  //  State definitions
  const [retailer, setRetailer] = useState({ id: "AMAZON_CA", name: "Amazon" });
  const [search_key, setSearch_key] = useState("");
  const [focused, setFocused] = useState(false);
  // Hooks

  // Component Functions
  const updateSearch = searchText => {
    setSearch_key(searchText);
  };
  const rightLabel =
    (focused && search_key) || search_key ? (
      <Icon name="times" size={Spacing.BASE * 0.8} color={"black"} />
    ) : (
      <Icon name="search" size={Spacing.BASE * 0.8} color={"black"} />
    );
    
  // render Ui
  return (
    <Block padding={[Spacing.PADDING_15*.5,Spacing.PADDING_15*.5]}>
      <Input
        editable={!Loading}
        rounded
        RightValue
        RightValueText={retailer.name}
        rounded
        color={"green"}
        placeholder="Search"
        rightLabel={rightLabel}
        onChangeText={updateSearch}
        value={search_key}
        onFocus={() => {
          setFocused(true);
        }}
        onRightPress={() => {
          if (Loading) {
            setLoading(false);
          } else {
            setSearch_key("");
            setLoading(false);
          }
          setLoading(false);
        }}
        onSubmitEditing={() => {
          Search();
        }}
        gray3
        onRightValuePress={() => {
          menuRef.current.open();
        }}
      />
      {Loading ? (
        <ActivityIndicator
          size="small"
          color={"black"}
          style={{ paddingVertical: Spacing.PADDING_15 }}
        />
      ) : null}
      <Menu
        onChange={value => {
          setRetailer(value);
        }}
        itemButtonStyle={{
          position: "absolute",
          top: -100000
        }}
        selectedKey={retailer}
        ref={menuRef}
        data={retailerData}
      />
    </Block>
  );
};

export default SearchBox;
