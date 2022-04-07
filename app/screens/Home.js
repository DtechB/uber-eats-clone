import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import colors from "../config/colors";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ResturantItems from "../components/ResturantItems";

const data = [
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    name: "Farmhouse kitchen Thi Chineese",
    rating: 4.5,
  },
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    name: "Farmhouse kitchen Thi Chineese",
    rating: 4,
  },
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    name: "Farmhouse kitchen Thi Chineese",
    rating: 3.5,
  },
];

function Home(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturants={data} />
      </ScrollView>
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
