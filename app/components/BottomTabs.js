import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

function BottomTabs(props) {
  const [active, setActive] = useState(false);
  return (
    <View style={styles.container}>
      <Item icon="home" text="Home" />
      <Item icon="search-plus" text="Brows" />
      <Item icon="shopping-bag" text="Grocery" />
      <Item icon="receipt" text="Orders" />
      <Item icon="user" text="Account" />
    </View>
  );
}

const Item = ({ icon, text }) => (
  <View style={{ alignItems: "center" }}>
    <FontAwesome5 name={icon} size={25} color="black" />
    <Text>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
    marginHorizontal: 30,
  },
});

export default BottomTabs;
