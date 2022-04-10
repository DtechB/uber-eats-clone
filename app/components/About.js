import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const image1 =
  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";

function About({ getRestourantFromYelp }) {
  //   const { title, price, rating, reviews, image, categories } =
  //     getRestourantFromYelp;

  //   const formatCategory = categories
  //     .map((category) => category.title)
  //     .join(" . ");

  //   const description = `${formatCategory} . ${
  //     price ? " . " + price : ""
  //   } . 🎫 . ${rating} . ⭐ . (${reviews}+)`;

  return (
    <View style={styles.container}>
      <ResturantImage image={image1} />
      <ResturantTitle name="This is demo of Resturant" />
      <ResturantDesc desc="thi resturant . $$ . dolor . hello" />
    </View>
  );
}

const ResturantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 200 }} />
);

const ResturantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 26,
      fontWeight: "700",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const ResturantDesc = ({ desc }) => (
  <Text
    style={{
      marginHorizontal: 15,
      fontSize: 15,
      fontWeight: "400",
      marginTop: 10,
    }}
  >
    {desc}
  </Text>
);

const styles = StyleSheet.create({
  container: {},
});

export default About;
