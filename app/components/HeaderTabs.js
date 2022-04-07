import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";
import Screen from "./Screen";

function HeaderTabs(props) {
  const [activeTab, setActiveTab] = useState("Delivery");

  const handlePress = () => {
    activeTab === "Delivery"
      ? setActiveTab("Pickup")
      : setActiveTab("Delivery");
  };

  return (
    <View style={styles.container}>
      <HeaderButton
        text="Delivery"
        backColor={activeTab === "Delivery" ? colors.black : colors.white}
        color={activeTab === "Delivery" ? colors.white : colors.black}
        onPress={handlePress}
      />
      <HeaderButton
        text="Pickup"
        backColor={activeTab === "Pickup" ? colors.black : colors.white}
        color={activeTab === "Pickup" ? colors.white : colors.black}
        onPress={handlePress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default HeaderTabs;

const HeaderButton = ({ text, backColor, color, onPress }) => (
  <View>
    <TouchableOpacity
      style={{
        backgroundColor: backColor,
        paddingHorizontal: 16,
        paddingVertical: 6,
        borderRadius: 30,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: color,
          fontSize: 15,
          fontWeight: "700",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  </View>
);
