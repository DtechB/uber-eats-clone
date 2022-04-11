import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItems from "../components/MenuItems";
import ViewCart from "../components/ViewCart";
import colors from "../config/colors";

function ResturantDetails({ route, navigation }) {
  return (
    <View style={styles.container}>
      <About getRestourantFromYelp={route.params} />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <MenuItems resturantName={route.params.name} />
      <ViewCart navigation={navigation} resturantName={route.params.name} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ResturantDetails;
