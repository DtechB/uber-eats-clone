import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/About";
import MenuItems from "../components/MenuItems";
import colors from "../config/colors";

function ResturantDetails(props) {
  return (
    <View style={styles.container}>
      <About />
      <Divider width={1.8} style={{ marginTop: 20 }} />
      <MenuItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ResturantDetails;
