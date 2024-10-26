import { View, Text, Button, Pressable } from "react-native";
import React from "react";

const ButtonComponent = () => {
  return (
    <View>
      <Button
        title="Press me"
        color={"#841584"}
        onPress={() => {
          // console.log("Pressed");
          alert("Pressed");
        }}
      />
      <Button title="Press me" color={"#841584"} disabled />

      <Pressable onLongPress={() => console.log("Pressed long")}>
        <Text style={{ color: "teal" }}>Press me</Text>
      </Pressable>
    </View>
  );
};

export default ButtonComponent;
