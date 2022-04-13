import React from "react";
import { View, StyleSheet, Text } from "react-native";

function OrderItem({ item, isBold = false }) {
  const { name, price } = item;
  return (
    <View style={styles.container}>
      <Text
        style={{ fontSize: 16, fontWeight: `${isBold ? "700" : "normal"}` }}
      >
        {name}
      </Text>
      <Text style={{ fontSize: 16, opacity: 0.7 }}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#999",
  },
});

export default OrderItem;
