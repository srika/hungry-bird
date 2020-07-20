import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Carousel from "react-native-snap-carousel";
import yelp from "../api/yelp";
const DetailsScreen = ({ navigation }) => {
  let _carousel = {};
  const [result, setResult] = useState(null);
  useEffect(() => {
    const id = navigation.getParam("id");
    getDetails(id);
  }, []);
  const getDetails = async (id) => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  const renderItem = ({ item }) => {
    return (
      <View style={styles.imageView}>
        <Image source={{ uri: item }} style={styles.imageStyle} />
      </View>
    );
  };
  if (!result) {
    return null;
  }
  return (
    <>
      <View style={styles.container}>
        <Carousel
          ref={(c) => {
            _carousel = c;
          }}
          layout={"default"}
          data={result.photos}
          sliderWidth={360}
          itemWidth={256}
          firstItem={1}
          renderItem={renderItem}
          layoutCardOffset={9}
        />
      </View>
      <Text style={styles.titleStyle}>{result.name}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={result.categories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text style={styles.category}>{item.title}</Text>;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    height: 150,
    width: 100,
  },
  imageView: {
    justifyContent: "center",
    alignItems: "center",
    width: 256,
  },
  imageStyle: { width: 250, height: 120, borderRadius: 4, marginTop: 15 },
  titleStyle: {
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
  },
  category: {
    borderColor: "gray",
    borderWidth: 1,
    marginLeft: 5,
    height: 30,
    padding: 5,
  },
});
export default DetailsScreen;
