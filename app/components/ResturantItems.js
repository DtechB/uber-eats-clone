import React from "react";
import { View } from "react-native";
import ResturantItem from "./ResturantItem";

function ResturantItems({ resturants }) {
  return (
    <View>
      {resturants.map((resturant, index) => (
        <ResturantItem
          key={index}
          image={resturant.image}
          name={resturant.name}
          rating={resturant.rating}
        />
      ))}
    </View>
  );
}

export default ResturantItems;
