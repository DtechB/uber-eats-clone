import React from "react";
import {
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Text,
  View,
} from "react-native";
import colors from "../config/colors";

const items = [
  {
    id: 1,
    image: require("../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    id: 2,
    image: require("../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  { id: 3, image: require("../assets/images/bread.png"), text: "Bakery Items" },
  {
    id: 4,
    image: require("../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  { id: 5, image: require("../assets/images/deals.png"), text: "Deals" },
  { id: 6, image: require("../assets/images/desserts.png"), text: "Desserts" },
];

function Categories(props) {
  return (
    <View
      style={{
        marginTop: 5,
        backgroundColor: colors.white,
        paddingVertical: 10,
      }}
    >
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <View style={{ marginRight: 30, alignItems: "center" }}>
            <Image
              source={item.image}
              style={{ width: 40, height: 50, resizeMode: "contain" }}
            />
            <Text style={{ fontSize: 13, fontWeight: "700" }}>{item.text}</Text>
          </View>
        )}
        style={{ paddingLeft: 20 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default Categories;
