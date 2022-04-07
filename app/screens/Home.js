import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

function Home(props) {
  return (
    <View style={styles.container}>
      <HeaderTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Home;
