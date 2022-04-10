import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import colors from "../config/colors";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ResturantItems from "../components/ResturantItems";
import BottomTabs from "../components/BottomTabs";
import { Divider } from "react-native-elements";

const API_KEY =
  "jnwUOhBB1J4uxGN9EBq9jKaR9YNh5_ZsfgL-IIhJQ5I-7k1Um1i6J-Rau7dgn4YoGp0bLAhxYINn3dYkFHIBz1P8mUYMgjb-F9x-0RrU96uo1KR1R0qVu5mfDGlPYnYx";

function Home({ navigation }) {
  const [resturants, setResturants] = useState([]);
  const [activeTab, setActiveTab] = useState("Delivery");

  const getResturantsFromYelp = async () => {
    const response = await fetch(
      `https://api.yelp.com/v3/businesses/search?term=restaurants&location=Hollywood`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );
    const json = await response.json();
    setResturants(
      json.businesses.filter((business) =>
        business.transactions.includes(activeTab.toLowerCase())
      )
    );
  };

  useEffect(() => {
    getResturantsFromYelp();
  }, [activeTab]);
  return (
    <Screen style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturants={resturants} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
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
