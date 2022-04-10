import React from "react";
import { View } from "react-native";
import ResturantItem from "./ResturantItem";

function ResturantItems({ resturants, navigation }) {
  return (
    <View>
      {resturants.map((resturant, index) => (
        <ResturantItem
          key={index}
          image_url={resturant.image_url}
          name={resturant.name}
          rating={resturant.rating}
          onPress={() => navigation.navigate("ResturantDetails", resturant)}
        />
      ))}
    </View>
  );
}

export default ResturantItems;
