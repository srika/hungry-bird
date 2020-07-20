import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetails = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.titleStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  imageStyle: { width: 250, height: 120, borderRadius: 4, marginBottom: 5 },
  titleStyle: {
    fontWeight: "bold",
  },
});
export default ResultDetails;
