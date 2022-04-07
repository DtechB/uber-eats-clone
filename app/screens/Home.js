import React from "react";
import { View, StyleSheet } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import colors from "../config/colors";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

function Home(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
  },
  headerTabs: {
    backgroundColor: colors.white,
    padding: 15,
    marginTop: 5,
  },
});

export default Home;
