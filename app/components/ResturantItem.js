import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ResturantItem({ image_url, name, rating, onPress }) {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <View style={styles.container}>
        <ResturantImage image={image_url} />
        <ResturantInfo name={name} rating={rating} />
      </View>
    </TouchableOpacity>
  );
}

const ResturantImage = (props) => (
  <>
    <Image
      source={{ uri: props.image }}
      style={{ width: "100%", height: 180, borderRadius: 5, marginBottom: 5 }}
    />
    <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }}>
      <MaterialCommunityIcons
        name="heart-outline"
        size={25}
        color={colors.white}
      />
    </TouchableOpacity>
  </>
);

const ResturantInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <View>
      <Text style={{ fontSize: 16, fontWeight: "700" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>30-45 . min</Text>
    </View>
    <Text
      style={{
        fontSize: 16,
        backgroundColor: colors.gray,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontWeight: "700",
      }}
    >
      {rating}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
});

export default ResturantItem;
