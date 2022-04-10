import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import ResturantDetails from "../screens/ResturantDetails";

export default function MainNavigator() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ResturantDetails" component={ResturantDetails} />
    </Stack.Navigator>
  );
}
