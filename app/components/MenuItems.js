import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch } from "react-redux";
import { cartAdded } from "../redux/reducers/cartReducer";
import colors from "../config/colors";

export const localRestaurants = [
  {
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$24.80",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Benihana",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Cafe", "Bar"],
    price: "$19.20",
    reviews: 1244,
    rating: 3.7,
  },
  {
    name: "India's Grill",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$45.20",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "India's G",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$45.20",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "India's Gri",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$45.20",
    reviews: 700,
    rating: 4.9,
  },
  {
    name: "India's Gril",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    categories: ["Indian", "Bar"],
    price: "$45.20",
    reviews: 700,
    rating: 4.9,
  },
];

function MenuItem({ resturantName }) {
  const dispatch = useDispatch();

  const selectedItem = (item, checkboxValue) => {
    dispatch({
      type: cartAdded,
      payload: {
        ...item,
        resturantName: resturantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  return (
    <>
      <FlatList
        data={localRestaurants}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <BouncyCheckbox
              iconStyle={{ borderRadius: 0, borderColor: "lightgray" }}
              fillColor="green"
              onPress={(checkboxValue) => selectedItem(item, checkboxValue)}
            />
            <ItemInfo
              title={item.name}
              description="this is test for resturant description asfsafsfasfashvchasb"
              price={item.price}
            />
            <Image
              source={{ uri: item.image_url }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
        style={{ marginBottom: 20 }}
        ItemSeparatorComponent={() => <Divider width={1} color={colors.gray} />}
      />
    </>
  );
}

const ItemInfo = ({ title, description, price }) => (
  <View style={{ width: 200, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 18, fontWeight: "700" }}>{title}</Text>
    <Text style={{ fontSize: 15 }}>{description}</Text>
    <Text style={{ fontSize: 15, fontWeight: "700" }}>{price}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
});

export default MenuItem;
