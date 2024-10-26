import { View, Text, Image, Button, StyleSheet } from "react-native";
import React from "react";

const CardComponent = () => {
  return (
    <View style={st.container}>
      <Image
        source={require("@/assets/images/react-logo.png")}
        style={st.imageStyle}
      />
      <Text style={st.title}>Dev KayD</Text>
      <Text>My name is KayD and i love coding.</Text>

      <Button title="Press me" />
    </View>
  );
};

const st = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    paddingHorizontal: 40,
    margin: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageStyle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default CardComponent;
