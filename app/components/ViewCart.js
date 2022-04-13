import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useSelector } from "react-redux";
import colors from "../config/colors";

function ViewCart(props) {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 360,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity style={styles.container}>
              <Text style={styles.text}>View Cart</Text>
              <Text style={styles.price}>{`$${total}`}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginTop: 20,
    backgroundColor: colors.black,
    alignItems: "center",
    position: "relative",
    padding: 15,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.white,
    marginRight: 20,
  },
  price: {
    color: colors.white,
    position: "absolute",
    right: 20,
    bottom: 18,
    fontSize: 16,
  },
});

export default ViewCart;
