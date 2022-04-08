import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import colors from "../config/colors";
import Screen from "../components/Screen";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import ResturantItems from "../components/ResturantItems";

const API_KEY =
  "jnwUOhBB1J4uxGN9EBq9jKaR9YNh5_ZsfgL-IIhJQ5I-7k1Um1i6J-Rau7dgn4YoGp0bLAhxYINn3dYkFHIBz1P8mUYMgjb-F9x-0RrU96uo1KR1R0qVu5mfDGlPYnYx";

function Home(props) {
  const [resturants, setResturants] = useState([]);

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
    setResturants(json.businesses);
  };

  useEffect(() => {
    getResturantsFromYelp();
  }, []);
  return (
    <Screen style={styles.container}>
      <View style={styles.headerTabs}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <ResturantItems resturants={resturants} />
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
